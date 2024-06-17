import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Rooms, RoomList } from './rooms';
import { NgIf, NgFor } from '@angular/common';
import { RoomsListComponent} from './rooms-list/rooms-list.component';
import { HeaderComponent } from '../header/header.component';
import { RoomsService } from './services/rooms.service';

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

  constructor(private roomsService: RoomsService) {}
  ngAfterViewInit(): void {
    this.headerComponent.title = 'Not Shreekar';
  }

  ngOnInit(): void {
    console.log(this.headerComponent);
    this.roomsService.getRooms().subscribe(rooms => {
      this.roomList = rooms;
    });
  }

  selectRoom(room: RoomList) {
    console.log(room);
  }

  toggle() {
    this.title = "Roomssss List"
  }

  addRoom() {
    const room: RoomList = {
      roomType: "Deluxe",
      amenities: "None",
      price: 0,
      photos: "None",
      checkinTime: new Date("11-Nov-2024"), 
      checkoutTime: new Date("12-Nov-2024"),  
      rating: 0
    }

    this.roomsService.addRoom(room).subscribe(data => {
      this.roomList = data;
    })
  }

  editRoom() {
    const room: RoomList = {
      roomNumber: "3",
      roomType: "Deluxe",
      amenities: "None",
      price: 0,
      photos: "None",
      checkinTime: new Date("11-Nov-2024"), 
      checkoutTime: new Date("12-Nov-2024"),  
      rating: 0
    };

    this.roomsService.editRoom(room).subscribe(data => {
      this.roomList = data;
    });
  }

  deleteRoom() {
    this.roomsService.deleteRoom('3').subscribe(data => {
      this.roomList = data;
    })
  }




}
