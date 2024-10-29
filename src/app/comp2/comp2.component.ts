import { Component } from '@angular/core';
import { NumlistService } from '../numlist.service';

@Component({
  selector: 'app-comp2',
  standalone: true,
  imports: [],
  templateUrl: './comp2.component.html',
  styleUrl: './comp2.component.css',
  providers: [NumlistService],
})
export class Comp2Component {
  list1: number[] = [];
  constructor(private _numlistservice: NumlistService) {
    this.list1 = _numlistservice.getlist();
  }
  addnumber(val: any) {
    this._numlistservice.addnum(val);
    this.list1 = this._numlistservice.getlist();
  }
  getdata(){
    console.log(localStorage.getItem("user"));
    console.log(localStorage.getItem("Emp"));
  }
  deletedata(){
    localStorage.removeItem("EmpId");
  }
}
