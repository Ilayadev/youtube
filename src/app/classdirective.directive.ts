import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appClassdirective]'
})
export class ClassdirectiveDirective {

  constructor(private element:ElementRef,private renderer:Renderer2) {
    
   }
  @Input("appClassdirective") set classes(value:object){
    let entries=Object.entries(value)
    for(let key of entries){
      if(key[1]){
         this.renderer.addClass(this.element.nativeElement,key[0])
      }
    }
  } 
}
