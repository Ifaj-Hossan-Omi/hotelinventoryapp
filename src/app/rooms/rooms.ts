export interface Room {
    totalRooms?: number;
    availableRooms?: number;
    bookedRooms?: number;
}

export interface RoomList {
    roomNumber: number;
    roomType: string;
    amenitis: string;
    price: number;
    photos: string;
    checkinTime: Date;
    checkoutTime: Date;
}
