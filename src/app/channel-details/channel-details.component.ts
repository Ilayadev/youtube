import { Component, Input, OnInit } from '@angular/core';
import { channeldetails } from '../interface';

@Component({
  selector: 'app-channel-details',
  templateUrl: './channel-details.component.html',
  styleUrls: ['./channel-details.component.css']
})
export class ChannelDetailsComponent implements OnInit {
 @Input()profile!:boolean
 @Input()channeldetails!:channeldetails
  constructor() { }

  ngOnInit(): void {
  }

}
