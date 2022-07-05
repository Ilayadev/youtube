import { Component, Input, OnInit } from '@angular/core';
import { details } from '../interface';
@Component({
  selector: 'app-channel',
  templateUrl: './channel.component.html',
  styleUrls: ['./channel.component.css']
})
export class ChannelComponent implements OnInit {
 @Input()channel!:details
  constructor() { }

  ngOnInit(): void {
  }

}
