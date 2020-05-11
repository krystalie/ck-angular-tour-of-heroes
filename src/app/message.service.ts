import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
	//enforced type: array of strings
  messages: string[] = [];


//add a message
  add(message: string) {
    this.messages.push(message);
  }
//push appends item into back of array

//clear the message cache
  clear() {
    this.messages = [];
  }
}