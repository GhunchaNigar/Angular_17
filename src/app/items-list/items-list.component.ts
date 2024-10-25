import { Component } from '@angular/core';
import {ItemsComponent } from '../items/items.component'

@Component({
  selector: 'app-items-list',
  standalone: true,
  imports: [ItemsComponent],
  templateUrl: './items-list.component.html',
  styleUrl: './items-list.component.css'
})
export class ItemsListComponent {
items:any[]=new Array(2);
showitems:boolean=false;
}
