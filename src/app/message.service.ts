import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  messages: string[] = [];
  constructor() {}

  add(newMessage: string) {
    this.messages.push(newMessage);
  }

  clear() {
    this.messages = [];
  }
}
