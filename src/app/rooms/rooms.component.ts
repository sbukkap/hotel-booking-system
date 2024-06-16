import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Rooms, RoomList } from './rooms';
import { NgIf, NgFor } from '@angular/common';
import { RoomsListComponent} from './rooms-list/rooms-list.component';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-rooms',
  standalone: true,
  imports: [NgIf, NgFor, RoomsListComponent, HeaderComponent],
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit, AfterViewInit {
  hotelname = "Shreekar";
  numberofrooms = 10;
  room: Rooms = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 10,
  };
  title = "Room List"

  roomList: RoomList[] = [];
  
  @ViewChild(HeaderComponent, {static: true}) headerComponent! : HeaderComponent;

  constructor() {}
  ngAfterViewInit(): void {
    this.headerComponent.title = 'Not Shreekar';
  }

  ngOnInit(): void {
    console.log(this.headerComponent);
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

  toggle() {
    this.title = "Roomssss List"
  }

}
