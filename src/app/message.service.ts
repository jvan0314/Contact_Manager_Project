import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

//this service exposes the cache of messages and two methods to add and clear messages
export class MessageService {
  messages: string[] = [];

  add(message: string) {
    this.messages.push(message);
  }

  clear() {
    this.messages = [];
  }
}
