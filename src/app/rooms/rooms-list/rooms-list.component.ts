import { Component, OnInit, Input} from '@angular/core';
import { NgFor } from '@angular/common';
import { RoomList } from '../rooms';

@Component({
  selector: 'app-rooms-list',
  standalone: true,
  imports: [NgFor],
  templateUrl: './rooms-list.component.html',
  styleUrl: './rooms-list.component.scss'
})
export class RoomsListComponent implements OnInit {

  @Input() rooms: RoomList[] = [];
  
  constructor() { }

  ngOnInit(): void {
      
  }
}
