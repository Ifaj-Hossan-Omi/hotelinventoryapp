import { Component } from '@angular/core';
import { Room, RoomList } from './rooms';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'],
})
export class RoomsComponent {
  hoetelName = 'Hotel California';
  numberOfRooms = 10;
  hideRooms = false;

  rooms: Room = {
    totalRooms: 10,
    availableRooms: 2,
    bookedRooms: 5,
  };

  roomList: RoomList[] = [
    {
      roomNumber: 1,
      roomType: 'Deluxe',
      amenitis: 'Air Conditioning, TV, WiFi',
      price: 100,
      photos: 'https://picsum.photos/200/300',
      checkinTime: new Date('2020-01-01'),
      checkoutTime: new Date('2020-01-02'),
    },
    {
      roomNumber: 2,
      roomType: 'Super Deluxe',
      amenitis: 'Air Conditioning, TV, WiFi',
      price: 200,
      photos: 'https://picsum.photos/200/300',
      checkinTime: new Date('2020-01-01'),
      checkoutTime: new Date('2020-01-02'),
    },
    {
      roomNumber: 3,
      roomType: 'Luxury',
      amenitis: 'Air Conditioning, TV, WiFi',
      price: 300,
      photos: 'https://picsum.photos/200/300',
      checkinTime: new Date('2020-01-01'),
      checkoutTime: new Date('2020-01-02'),
    }
  ];

  toggle() {
    this.hideRooms = !this.hideRooms;
    // this.numberOfRooms = this.numberOfRooms === 10 ? 20 : 10;
  }
}
