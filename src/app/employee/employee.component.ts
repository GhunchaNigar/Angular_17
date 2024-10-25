import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css',
  inputs:['Pdata'],
  outputs:['childevent']
})
export class EmployeeComponent {
  Pdata:any;
  childevent=new EventEmitter();
  senddata(val:any){
this.childevent.emit(val)
  }
}
