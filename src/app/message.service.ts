import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  messages: string[] = [];  // ประกาศตัวแปร messages  array  string
  // ฟังชั่น เพิ่ม  message
  add(message: string) {
    //  push  message ลง ใน message
    this.messages.push(message);
  }

  clear() {   // ทำให้ตัวแปร messages = ค่าว่าง
    this.messages = [];
  }


  constructor() { }
}
