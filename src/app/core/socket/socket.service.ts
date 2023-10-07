import { Injectable } from '@angular/core';
import { io } from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  constructor() { }

  socket = io('http://localhost:4000');

  emitEvent(){
    this.socket.emit('connection');
  }

  checkTask(){
    this.socket.emit('done');
  }

}
