import { Component, OnInit } from '@angular/core';
import { Rooms, RoomList } from './rooms';
import { NgIf, NgFor } from '@angular/common';
import { RoomsListComponent } from './rooms-list/rooms-list.component';

@Component({
  selector: 'app-rooms',
  standalone: true,
  imports: [NgIf, NgFor, RoomsListComponent],
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit {
  hotelname = "Shreekar";
  numberofrooms = 10;
  room: Rooms = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 10,
  };

  roomList: RoomList[] = [];
  
  constructor() {}

  ngOnInit(): void {
    this.roomList = [
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

  selectRoom(room: RoomList) {
    console.log(room);
  }
}
