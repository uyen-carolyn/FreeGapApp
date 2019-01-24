import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { AppComponent } from './app.component';
import { HeaderComponent } from './view/header/header.component';
import { LoginComponent } from './view/login/login.component';
import { SignupComponent } from './view/signup/signup.component';
import { DashboardComponent } from './view/dashboard/dashboard.component';
import { AppRoutes } from './app.routing';
import { DataStorageService } from './shared/data-storage.service';
import { AuthService } from './shared/auth.service';
import { AuthGuard } from './shared/auth-guard.service';
import { EventListComponent } from './view/events/event-list/event-list.component';
import { EventsService } from './view/events/events.service';
import { EventDetailComponent } from './view/events/event-detail/event-detail.component';
import { EventEditComponent } from './view/events/event-edit/event-edit.component';
import { EventHeaderComponent } from './view/events/event-header/event-header.component';
import { EventItemComponent } from './view/events/event-list/event-item/event-item.component';
import { DateFormatPipe } from './shared/date-format.pipe';
import { TimeFormatPipe } from './shared/time-format.pipe';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    EventListComponent,
    EventItemComponent,
    EventDetailComponent,
    EventEditComponent,
    EventHeaderComponent,
    DateFormatPipe,
    TimeFormatPipe,
  ],
  imports: [
    BrowserModule, HttpModule, AppRoutes, FormsModule, BrowserAnimationsModule,
    ReactiveFormsModule, NgbModule.forRoot()
  ],
  providers: [EventsService, DataStorageService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
