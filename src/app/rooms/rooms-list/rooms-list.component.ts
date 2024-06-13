import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { NgFor } from '@angular/common';
import { RoomList } from '../rooms';

@Component({
  selector: 'app-rooms-list',
  standalone: true,
  imports: [NgFor],
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.scss']
})
export class RoomsListComponent implements OnInit, OnChanges {

  @Input() rooms: RoomList[] = [];
  @Input() title: string = "";

  @Output() selectedRoom = new EventEmitter<RoomList>();  


  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    if(changes['title']){
      this.title = changes["title"].currentValue.toUpperCase();
    }
  }

  ngOnInit(): void {
  }

  selectRoom(room: RoomList) {
    this.selectedRoom.emit(room);
  }

}
