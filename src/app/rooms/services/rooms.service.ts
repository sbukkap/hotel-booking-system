import { Injectable } from '@angular/core';
import { RoomList } from '../rooms';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {
  roomList: RoomList[]  = [
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
  constructor() { }

  getRooms() {
    return this.roomList;
  }
}
