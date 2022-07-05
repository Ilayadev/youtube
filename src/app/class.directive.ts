import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appClass]'
})
export class ClassDirective {

  constructor(private element:ElementRef,private renderer:Renderer2) { }
  @Input() set appClass(value:object){
    let entries=Object.entries(value)
    for(let key of entries){
      if(key[1]){
        console.log(key[1])
        this.renderer.addClass(this.element.nativeElement,key[0])
      }
    }
  }

}
