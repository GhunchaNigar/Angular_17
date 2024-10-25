import { Component, HostListener, ViewEncapsulation } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {StudentComponent} from './student/student.component';
import {ItemsListComponent} from './items-list/items-list.component';
import {EmployeeComponent} from './employee/employee.component'
import { Book } from './book';
import { CommonModule } from '@angular/common';


class abc{
  constructor(){
    console.log('Constructor called')
  }
  show(){
    console.log("viewprovider constructor called")
  }
}
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, StudentComponent, ItemsListComponent,EmployeeComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  viewProviders:[abc,Book],
  encapsulation:ViewEncapsulation.None
})
export class AppComponent {
  title = 'Project';
  isvalid=true;
  islogedin:boolean=true;
  login(){
    this.islogedin=true;
  }
  logout(){
    this.islogedin=false;
  }
  age:number =56;
  name:string='Alex';
  students:any[]=[
    {id:105, name:'Ghuncha'},
    {id:106, name:'Malaika'},
    {id:107, name:'Yusra'},
  ]
  @HostListener('click',['$event'])
  show(){
    alert("Hostlisteners");
  }
  constructor(private _abc:abc, private _book:Book){
    console.log('Component constructor called');
    _abc.show();
  }
  Cdata:any;
  getdata(val:any){
this.Cdata=val;
  }
  onchange(val:any){
    this.isvalid=val;
  }
  employees:any[]=[
    {id:100, name:'Joseph'},
    {id:101, name:'Albert'},
    {id:102, name:'Ibraham'},
    {id:103, name:'Mosa'},
    {id:104, name:'Daniel'},
    {id:105, name:'John'},
  ]
  mycountry='Pakistan';
  getcolor(name:any){
    switch(name){
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
  city='D I Khan';
  changecity(){
    this.city="Islamabad";
  }
 /// company:any;
  company={
    name:'XYZ',
    city:'D I Khan',
    state: 'xyz',
    country: 'Pakistan'
  }
  col=2;
}
