import { Observable } from 'rxjs';
import * as io from 'socket.io-client';
import { Injectable } from '@angular/core';

import { environment } from '../../environments/environment';
import { constants } from '../../constants';

@Injectable({providedIn: 'root'})
export class ChatService {
  private url = environment.url;
  private socket: any;

  constructor() {
    this.socket = io(this.url);
  }

  sendMessage(data) {
    this.socket.emit(constants.ADD_MESSAGE, data);
  }

  userConnect(username) {
    this.socket.emit(constants.USER_CONNECT, username);
  }

  userDisconnect() {
    return new Observable(observer => {
        this.socket.on(constants.DISCONNECT, (data) => {
          observer.next(data);
        });
      }
    );
  }

  getMessages() {
    return new Observable(observer => {
      this.socket.on(constants.NEW_MESSAGE, (data) => {
        observer.next(data);
      });
      return () => {
        this.socket.disconnect();
      };
    });
  }

  getUser() {
    return new Observable(observer => {
      this.socket.on(constants.NEW_USER, (data) => {
        observer.next(data);
      });
      return () => {
        this.socket.disconnect();
      };
    });
  }
}
