import { Component } from '@angular/core';
import { NumlistService } from '../numlist.service';

@Component({
  selector: 'app-comp1',
  standalone: true,
  imports: [],
  templateUrl: './comp1.component.html',
  styleUrl: './comp1.component.css',
  providers: [NumlistService],
})
export class Comp1Component {
  list1: number[] = [];
  constructor(private _numlistservice: NumlistService) {
    this.list1 = _numlistservice.getlist();
  }
  addnumber(val: any) {
    this._numlistservice.addnum(val);
    this.list1 = this._numlistservice.getlist();
  }
  setdata(){
    localStorage.setItem("Emp", "awan001");
  }

}
