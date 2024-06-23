import { Routes } from '@angular/router';
import { RoomsComponent } from './rooms/rooms.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { RoomsBookingComponent } from './rooms/rooms-booking/rooms-booking.component';
import { RoomsAddComponent } from './rooms/rooms-add/rooms-add.component';
import { LoginComponent } from './rooms/login/login.component';

export const routes: Routes = [
  {
    path: 'rooms',
    component: RoomsComponent,
    children: [{ path: ':id', component: RoomsBookingComponent }],
  },
  { path: 'rooms/add', component: RoomsAddComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', component: NotfoundComponent },
];
