import { Directive, ElementRef, Input, Renderer2, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appStyle]'
})
export class StyleDirective {

  constructor(private temp:TemplateRef<any>,private viewcon:ViewContainerRef) { 
    console.log(viewcon)
  }
 
}
