import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-result-tickets',
  templateUrl: './result-tickets.component.html',
  styleUrls: ['./result-tickets.component.css']
})
export class ResultTicketsComponent implements OnInit { 
  
  constructor(public data:DataService,private activeroute:ActivatedRoute) {
     activeroute.queryParamMap.subscribe((param)=>{
       data.service.searched=param.get('search') as string       
     })
   }
  ngOnInit(): void {
  }

}
