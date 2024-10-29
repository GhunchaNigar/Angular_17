import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MyserviceService {
  _message = 'Hello';
  constructor() {}
  getmessage() {
    return this._message;
  }
}
