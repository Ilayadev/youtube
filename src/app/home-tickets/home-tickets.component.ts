import { Component, Input, OnInit } from '@angular/core';
import { details } from '../interface'
@Component({
  selector: 'app-home-tickets',
  templateUrl: './home-tickets.component.html',
  styleUrls: ['./home-tickets.component.css']
})
export class HomeTicketsComponent implements OnInit {
 @Input()data!:details
  constructor() { }

  ngOnInit(): void {   
  }

}
