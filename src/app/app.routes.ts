import { Routes } from '@angular/router';
import { RoomsComponent } from './rooms/rooms.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { RoomsBookingComponent } from './rooms/rooms-booking/rooms-booking.component';

export const routes: Routes = [
    { path: "rooms", component: RoomsComponent },
    { path: "", redirectTo: "/rooms", pathMatch: "full",},
    { path: "rooms/:id", component: RoomsBookingComponent},
    { path: "**", component: NotfoundComponent}
];
