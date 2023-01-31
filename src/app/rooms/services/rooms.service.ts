import { Injectable } from '@angular/core';
import { RoomList } from '../rooms';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class RoomsService {
  constructor(private http: HttpClient) {
    console.log('RoomsService constructor');
  }

  roomList: RoomList[] = [
    // {
    //   roomNumber: 1,
    //   roomType: 'Deluxe',
    //   amenitis: 'Air Conditioning, TV, WiFi',
    //   price: 100,
    //   photos: 'https://picsum.photos/200/300',
    //   checkinTime: new Date('2020-01-01'),
    //   checkoutTime: new Date('2020-01-02'),
    //   rating: 4.5,
    // },
    // {
    //   roomNumber: 2,
    //   roomType: 'Super Deluxe',
    //   amenitis: 'Air Conditioning, TV, WiFi',
    //   price: 200,
    //   photos: 'https://picsum.photos/200/300',
    //   checkinTime: new Date('2020-01-01'),
    //   checkoutTime: new Date('2020-01-02'),
    //   rating: 5,
    // },
    // {
    //   roomNumber: 3,
    //   roomType: 'Luxury',
    //   amenitis: 'Air Conditioning, TV, WiFi',
    //   price: 300,
    //   photos: 'https://picsum.photos/200/300',
    //   checkinTime: new Date('2020-01-01'),
    //   checkoutTime: new Date('2020-01-02'),
    //   rating: 2.3, 
    // },
  ];

  getRooms() {
    // return this.roomList;
    return this.http.get<RoomList[]>(' /api/rooms');
  }

  addRooms(room: RoomList){
    return this.http.post<RoomList[]>(' /api/rooms', room);
  }

  editRooms(room: RoomList){
    return this.http.put<RoomList[]>(`/api/rooms/${room.roomNumber}`, room);
  } 

  deleteRooms(id: string){
    return this.http.delete<RoomList[]>(`/api/rooms/${id}`);
  }
}
