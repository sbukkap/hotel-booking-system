import { Component } from '@angular/core';
import { Rooms, RoomList } from './rooms';
import { NgIf, NgFor } from '@angular/common';

@Component({
  selector: 'app-rooms',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.scss'
})
export class RoomsComponent {
  hotelname = "Shreekar";
  numberofrooms = 10;
  room : Rooms = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 10,
  }

  roomList: RoomList[] = [
  {
    roomType: "Deluxe",
    amenities: 'Air, Wifi, Food',
    price: 500,
    checkinTime: new Date('11-Nov-2021'),
    checkoutTime: new Date('12-Nov-2021'), 
  },
  {
    roomType: "Deluxe",
    amenities: 'Air, Wifi, Food',
    price: 500,
    checkinTime: new Date('11-Nov-2021'),
    checkoutTime: new Date('12-Nov-2021'), 
  },
  {
    roomType: "Deluxe",
    amenities: 'Air, Wifi, Food',
    price: 500,
    checkinTime: new Date('11-Nov-2021'),
    checkoutTime: new Date('12-Nov-2021'), 
  }
  
  ];
}