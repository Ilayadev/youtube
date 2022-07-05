import { Component, Input, OnInit } from '@angular/core';
import { details } from '../interface';
@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})
export class TicketsComponent implements OnInit {
  @Input()data!:details
  constructor() { }

  ngOnInit(): void { 
  }


}
