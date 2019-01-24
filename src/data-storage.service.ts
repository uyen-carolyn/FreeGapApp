import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { AuthService } from './auth.service';
import { EventsService } from '../view/events/events.service';
import { Event } from '../view/events/event.model';

@Injectable()
export class DataStorageService {

  constructor(private http: Http, private eventsService: EventsService,
              private authService: AuthService) { }

  storeEvents() {
    const token = this.authService.getToken();
    return this.http.put('https://ng-free-gap-app.firebaseio.com/' + this.authService.getUserID() + '/events.json?auth=' + token,
    this.eventsService.getEvents());
  }

  getEvents() {
    const token = this.authService.getToken();
    this.http.get('https://ng-free-gap-app.firebaseio.com/' + this.authService.getUserID() + '/events.json?auth=' + token).map(
      (response: Response) => {
        const events: Event[] = response.json();
        return events;
      }
    ).subscribe(
      (events: Event[]) => {
        this.eventsService.setEvents(events);
      }
    );
  }

}

