import { AfterViewChecked, AfterViewInit, Component, DoCheck, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-img-tag',
  templateUrl: './img-tag.component.html',
  styleUrls: ['./img-tag.component.css']
})
export class ImgTagComponent implements OnInit{ 
  @Input()imgurl!:string
  constructor() { }
  ngOnInit(): void {
  }  
}
