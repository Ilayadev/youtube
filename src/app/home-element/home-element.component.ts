import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home-element',
  templateUrl: './home-element.component.html',
  styleUrls: ['./home-element.component.css']
})
export class HomeElementComponent implements OnInit {

  constructor(public data:DataService) {    
   }

  ngOnInit(): void {
  }

}
