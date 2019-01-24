import { Component, OnInit } from '@angular/core';
import { EventsService } from '../events.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Event } from '../event.model';


@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.scss']
})
export class EventDetailComponent implements OnInit {
  event: Event;
  id: number;

  constructor(private eventService: EventsService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.event = this.eventService.getEvent(this.id);
        }
      );
  }

  onEditEvent() {
    this.router.navigate(['edit'], { relativeTo: this.route });
  }

  onDeleteEvent() {
    this.eventService.deleteEvent(this.id);
    this.router.navigate(['/dashboard']);
  }

}
