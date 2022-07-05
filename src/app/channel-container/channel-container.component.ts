import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { details } from '../interface';

@Component({
  selector: 'app-channel-container',
  templateUrl: './channel-container.component.html',
  styleUrls: ['./channel-container.component.css']
})
export class ChannelContainerComponent implements OnInit {
 selectedTagArray!:details[]
  constructor(private data:DataService) { }
  @Input()tag!:string 
  ngOnInit(): void {
    this.selectedTagArray= this.data.service.data.filter(x=>x.tag===this.tag)    
  }
}
