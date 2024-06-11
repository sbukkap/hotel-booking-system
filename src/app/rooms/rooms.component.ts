import { Component } from '@angular/core';
import { Rooms } from './rooms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-rooms',
  standalone: true,
  imports: [NgIf],
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.scss'
})
export class RoomsComponent {
  hotelname = "Shreekar";
  numberofrooms = 10;
  room : Rooms = {
    numberofrooms: 10,
  }

}