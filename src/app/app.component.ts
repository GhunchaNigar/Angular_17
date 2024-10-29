import { Component, ViewEncapsulation } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { StudentComponent } from './student/student.component';
import { ItemsListComponent } from './items-list/items-list.component';
import { EmployeeComponent } from './employee/employee.component';
import { Book } from './book';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MyFirstPipePipe } from './my-first-pipe.pipe';
import { MyserviceService } from './myservice.service';
import {Comp1Component} from './comp1/comp1.component';
import {Comp2Component } from './comp2/comp2.component'
import { LoginComponent } from "./login/login.component";
import {TemplateformComponent} from './templateform/templateform.component'

class abc {
  constructor() {
    console.log('Constructor called');
  }
  show() {
    console.log('viewprovider constructor called');
  }
}
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    StudentComponent,
    ItemsListComponent,
    EmployeeComponent,
    CommonModule,
    FormsModule,
    MyFirstPipePipe,
    Comp1Component,
    Comp2Component,
    RouterLink,
    LoginComponent,
    RouterLinkActive,
    TemplateformComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  viewProviders: [abc, Book],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  title = 'Project';
  isvalid = true;
  _msg:string='';
  islogedin: boolean = true;
  login() {
    this.islogedin = true;
  }
  logout() {
    this.islogedin = false;
  }
  age: number = 56;
  name: string = 'Alex';
  students: any[] = [
    { id: 105, name: 'Ghuncha' },
    { id: 106, name: 'Malaika' },
    { id: 107, name: 'Yusra' },
  ];

  constructor(private _abc: abc, private _book: Book,private _messageservice:MyserviceService ){
    console.log('Component constructor called');
    _abc.show();
    this._msg=_messageservice.getmessage();
    // if(window.localStorage){
    //   alert("Browser Supported")
    // }
    localStorage.setItem("userId", "ghuncha");
    sessionStorage.setItem("EmpId", "Nigar")
  }
  Cdata: any;
  getdata(val: any) {
    this.Cdata = val;
  }
  onchange(val: any) {
    this.isvalid = val;
  }
  employees: any[] = [
    { id: 100, name: 'Joseph' },
    { id: 101, name: 'Albert' },
    { id: 102, name: 'Ibraham' },
    { id: 103, name: 'Mosa' },
    { id: 104, name: 'Daniel' },
    { id: 105, name: 'John' },
  ];
  mycountry = 'Pakistan';
  getcolor(name: any) {
    switch (name) {
      case 'Joseph':
        return 'Blue';
      case 'Albert':
        return 'Yellow';
      case 'Ibraham':
        return 'pink';
      case 'Mosa':
        return 'aqua';
      case 'Daniel':
        return 'Green';
      case 'John':
        return 'red';
    }
    return null;
  }
  city = 'D I Khan';
  changecity() {
    this.city = 'Islamabad';
  }
  /// company:any;
  company = {
    name: 'XYZ',
    city: 'D I Khan',
    state: 'xyz',
    country: 'Pakistan',
  };
  col = 2;
  name1 = 'Muhammad';
  isbold = 'bold';
  classestoapply = 'boldclass';
  onchange1() {
    console.log('Event Clicked');
  }
  keydown() {
    console.log('Keydown Pressed');
  }
  keyup() {
    console.log('Keyup Pressed');
  }
  name2 = 'Daniyal Awan';
  onclick(val: any) {
    this.name2 = val;
  }
  message = 'Hello world';
  data = 'uppercase pipe';
  data1 = 'lowercase pipe';
  data2 = 'Titlecase pipe';
  num1 = 15.3;
  currentDate = new Date();
  

}
