import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { details } from '../interface';

@Component({
  selector: 'app-home-element',
  templateUrl: './home-element.component.html',
  styleUrls: ['./home-element.component.css']
})
export class HomeElementComponent implements OnInit {
 selectedTag:string="All"
 selectedData!:details[]
  constructor(public data:DataService) {    
   }

  ngOnInit(): void {
    this.selectedData=this.data.service.data
  }
  changingtags(tag:string){
    this.selectedTag=tag
    if(tag==='All'){
      this.selectedData=this.data.service.data
    }else{
      this.selectedData=this.data.service.data.filter(x=>x.tag===tag)
    }
  }

}
