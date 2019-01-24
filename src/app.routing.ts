import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './view/login/login.component';
import { DashboardComponent } from './view/dashboard/dashboard.component';
import { SignupComponent } from './view/signup/signup.component';
import { AuthGuard } from './shared/auth-guard.service';
import { EventListComponent } from './view/events/event-list/event-list.component';
import { EventHeaderComponent } from './view/events/event-header/event-header.component';
import { EventDetailComponent } from './view/events/event-detail/event-detail.component';
import { EventEditComponent } from './view/events/event-edit/event-edit.component';

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'signup',
        component: SignupComponent
    },
    {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [AuthGuard],
        children: [
            { path: '', component: EventHeaderComponent },
            {
                path: 'new', component: EventEditComponent
            },
            {
                 path: ':id', component: EventDetailComponent
            },
            {
                path: ':id/edit', component: EventEditComponent
            }
        ]
    },
];

export const AppRoutes = RouterModule.forRoot(appRoutes);
