import { Component } from '@angular/core';
import { Room, RoomList } from './rooms';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'],
})
export class RoomsComponent implements OnInit {
  hoetelName = 'Hotel California';
  numberOfRooms = 10;
  hideRooms = false;

  rooms: Room = {
    totalRooms: 10,
    availableRooms: 2,
    bookedRooms: 5,
  };

  roomList: RoomList[] = [];
  selectedRoom!: RoomList;
  title = 'Rooms List';
  constructor() {}

  ngOnInit(): void {
    this.roomList = [
      {
        roomNumber: 1,
        roomType: 'Deluxe',
        amenitis: 'Air Conditioning, TV, WiFi',
        price: 100,
        photos: 'https://picsum.photos/200/300',
        checkinTime: new Date('2020-01-01'),
        checkoutTime: new Date('2020-01-02'),
        rating: 4.5,
      },
      {
        roomNumber: 2,
        roomType: 'Super Deluxe',
        amenitis: 'Air Conditioning, TV, WiFi',
        price: 200,
        photos: 'https://picsum.photos/200/300',
        checkinTime: new Date('2020-01-01'),
        checkoutTime: new Date('2020-01-02'),
        rating: 5,
      },
      {
        roomNumber: 3,
        roomType: 'Luxury',
        amenitis: 'Air Conditioning, TV, WiFi',
        price: 300,
        photos: 'https://picsum.photos/200/300',
        checkinTime: new Date('2020-01-01'),
        checkoutTime: new Date('2020-01-02'),
        rating: 2.3,
      },
    ];
  }

  toggle() {
    this.hideRooms = !this.hideRooms;
    this.title = 'New Rooms List';
    // this.numberOfRooms = this.numberOfRooms === 10 ? 20 : 10;
  }

  selectRoom(room: RoomList) {
    this.selectedRoom = room;
  }

  addRoom() {
    const room: RoomList = {
      roomNumber: 4,
      roomType: 'Luxury',
      amenitis: 'Air Conditioning, TV, WiFi',
      price: 300,
      photos: 'https://picsum.photos/200/300',
      checkinTime: new Date('2020-01-01'),
      checkoutTime: new Date('2020-01-02'),
      rating: 1.3,
    };

    // this.roomList.push(room);
    this.roomList = [...this.roomList, room];

  }
}
