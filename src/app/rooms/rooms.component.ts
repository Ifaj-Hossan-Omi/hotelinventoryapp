import {
  AfterViewInit,
  Component,
  DoCheck,
  ViewChild,
  AfterViewChecked,
  ViewChildren,
  QueryList,
  SkipSelf,
} from '@angular/core';
import { Room, RoomList } from './rooms';
import { OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { RoomsService } from './services/rooms.service';
import { HttpRequest } from '@angular/common/http';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'],
})
export class RoomsComponent
  implements OnInit, DoCheck, AfterViewInit, AfterViewChecked
{
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
  // @ViewChild(HeaderComponent, {static: true}) headerComponent!: HeaderComponent;
  @ViewChild(HeaderComponent) headerComponent!: HeaderComponent;
  // @ViewChildren(HeaderComponent) headerComponents!: Array<HeaderComponent>;
  @ViewChildren(HeaderComponent) headerComponents!: QueryList<HeaderComponent>;

  // roomService = new RoomsService();

  constructor(private roomsService: RoomsService) {}

  ngOnInit(): void {
    console.log(this.headerComponent);
    this.roomsService.getRooms().subscribe((rooms) => {
      this.roomList = rooms;
    });
    // this.roomList = [
    //   {
    //     roomNumber: 1,
    //     roomType: 'Deluxe',
    //     amenitis: 'Air Conditioning, TV, WiFi',
    //     price: 100,
    //     photos: 'https://picsum.photos/200/300',
    //     checkinTime: new Date('2020-01-01'),
    //     checkoutTime: new Date('2020-01-02'),
    //     rating: 4.5,
    //   },
    //   {
    //     roomNumber: 2,
    //     roomType: 'Super Deluxe',
    //     amenitis: 'Air Conditioning, TV, WiFi',
    //     price: 200,
    //     photos: 'https://picsum.photos/200/300',
    //     checkinTime: new Date('2020-01-01'),
    //     checkoutTime: new Date('2020-01-02'),
    //     rating: 5,
    //   },
    //   {
    //     roomNumber: 3,
    //     roomType: 'Luxury',
    //     amenitis: 'Air Conditioning, TV, WiFi',
    //     price: 300,
    //     photos: 'https://picsum.photos/200/300',
    //     checkinTime: new Date('2020-01-01'),
    //     checkoutTime: new Date('2020-01-02'),
    //     rating: 2.3,
    //   },
    // ];
  }

  ngDoCheck(): void {
    console.log('Do Check');
  }

  ngAfterViewInit() {
    this.headerComponent.title = 'Hotel Relax';
    // this.headerComponents.forEach((headerComponent) => {
    //   headerComponent.title = 'Hotel rrr';
    // });
    this.headerComponents.last.title = 'last';
    // this.headerComponents.get(1).title = 'first'; // Not working
  }
  ngAfterViewChecked() {
    this.headerComponent.title = 'Hotel R';
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
      roomNumber: '4',
      roomType: 'Luxury',
      amenitis: 'Air Conditioning, TV, WiFi',
      price: 300,
      photos: 'https://picsum.photos/200/300',
      checkinTime: new Date('2020-01-01'),
      checkoutTime: new Date('2020-01-02'),
      rating: 1.3,
    };

    // this.roomList.push(room);
    // this.roomList = [...this.roomList, room];

    this.roomsService.addRooms(room).subscribe((data) => {
      this.roomList = data;
    });
  }

  editRoom(){
    const room: RoomList = {
      roomNumber: '3',
      roomType: 'Luxury',
      amenitis: 'Air Conditioning, TV, WiFi',
      price: 300,
      photos: 'https://picsum.photos/200/300',
      checkinTime: new Date('2020-01-01'),
      checkoutTime: new Date('2020-01-02'),
      rating: 1.3,
    };

    this.roomsService.editRooms(room).subscribe((data) => {
      this.roomList = data;
    });
  }

  deleteRoom(){
    this.roomsService.delete('3').subscribe((data) => {
      this.roomList = data;
    });
  }

  getPhotos(){
    const request = new HttpRequest('GET', 'https://jsonplaceholder.typicode.com/photos');
  }
}
