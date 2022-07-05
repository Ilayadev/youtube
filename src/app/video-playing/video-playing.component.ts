import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { details } from '../interface';

@Component({
  selector: 'app-video-playing',
  templateUrl: './video-playing.component.html',
  styleUrls: ['./video-playing.component.css']
})
export class VideoPlayingComponent implements OnInit {
 selectedId!:string
 dataobject!:details;
  constructor(public data:DataService,private activeRoute:ActivatedRoute) {
     activeRoute.paramMap.subscribe((param)=>{
       this.selectedId=param.get('id') as string
     })
     data.service.data.forEach(x=>{
       if(x.videoId===this.selectedId){
         this.dataobject=x
       }
     })
   }

  ngOnInit(): void {
  }

}
