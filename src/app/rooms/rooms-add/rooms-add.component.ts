import { Component, NgModule, OnInit } from '@angular/core';
import { RoomList } from '../rooms';
import { FormsModule } from '@angular/forms';
import { RoomsService } from '../services/rooms.service';

@Component({
  selector: 'app-rooms-add',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './rooms-add.component.html',
  styleUrl: './rooms-add.component.scss',
})
export class RoomsAddComponent implements OnInit {
  room: RoomList = {
    roomType: '',
    amenities: '',
    checkinTime: new Date(),
    checkoutTime: new Date(),
    photos: '',
    price: 0,
    rating: 0,
  };

  successMessage!: string;

  constructor(private roomsService: RoomsService) {}

  ngOnInit() {}

  AddRoom() {
    this.roomsService.addRoom(this.room).subscribe((data) => {
      this.successMessage = 'Added Successfully';
    });
  }
}
