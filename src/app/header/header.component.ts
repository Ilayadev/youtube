import { Component, DoCheck, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit ,DoCheck{
  @ViewChild('searchbar')searchbar!:ElementRef;
  hasfocus!:boolean;
  show!:boolean;
  searched!:string
  constructor(private renderer:Renderer2,public data:DataService,private router:Router) { }

  ngOnInit(): void {
  }
  ngDoCheck(): void {
      // this.searched=this.data.service.searched
  }
  focusing(){
    this.hasfocus=true    
    this.renderer.setStyle(this.searchbar.nativeElement,'border','1px solid #006cff')
    if(this.searched){
      this.show=true
    }
  }
  bluring(){
    this.hasfocus=false
    this.show=false
    this.renderer.setStyle(this.searchbar.nativeElement,'border','1px solid transparent')
    this.data.service.searched=this.searched
    if(this.data.service.searched){
      this.router.navigate(['/home/result'],{queryParams:{search:this.searched}})
    }
  }
  searching(e:any){
    if(e.keyCode===13){
      if(this.data.service.searched){
        this.show=true
      }
    }else{
      this.show=true
    }    
  }
}
