import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { EventsService } from '../events.service';
import { Event } from '../event.model';
import { DataStorageService } from '../../../shared/data-storage.service';

@Component({
  selector: 'app-event-edit',
  templateUrl: './event-edit.component.html',
  styleUrls: ['./event-edit.component.scss']
})
export class EventEditComponent implements OnInit {

  id: number;
  editMode = false;
  eventCalendarDate = null;
  eventForm: FormGroup;

  startTime = { hour: 0, minute: 0 };
  endTime = { hour: 0, minute: 0 };
  meridian = true;



  constructor(private route: ActivatedRoute,
              private router: Router,
              private eventService: EventsService,
              private dataStorage: DataStorageService) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.editMode = params['id'] != null;
          this.initForm();
        }
      );
  }

  onSubmit() {
    const date: Date = new Date(this.eventForm.value.date.year, this.eventForm.value.date.month - 1, this.eventForm.value.date.day);
    const newEvent: Event = new Event(this.eventForm.value.name, this.eventForm.value.description, date.toDateString(),
      this.eventForm.value.startTime, this.eventForm.value.endTime);

    if (this.editMode) {
      this.eventService.updateEvent(this.id, newEvent);
    } else {
      this.eventService.addEvent(newEvent);
    }
    this.dataStorage.storeEvents();
    this.onCancel();
  }

  onCancel() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }


  private initForm() {
    let eventName = '';
    let eventDescription = '';
    let eventDate = null;
    let startTime = this.startTime;
    let endTime = this.endTime;

    if (this.editMode) {
      const event = this.eventService.getEvent(this.id);
      eventName = event.name;
      eventDescription = event.description;
      eventDate = event.date;
      startTime = event.startTime;
      endTime = event.endTime;
    }

    this.eventForm = new FormGroup({
      'name': new FormControl(eventName, Validators.required),

      'description': new FormControl(eventDescription, Validators.required),
      'date': new FormControl(eventDate, Validators.required),
      'startTime': new FormControl(startTime, Validators.required),
      'endTime': new FormControl(endTime, Validators.required)
    });
  }

}
