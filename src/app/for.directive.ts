import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';


@Directive({
  selector: '[appFor]'
})
export class ForDirective<T> {

  constructor(private template:TemplateRef<any>,private container:ViewContainerRef) { }
  @Input()set appForOf(value:T[]){
     this.container.clear()
     value.forEach((item,index)=>{
       this.container.createEmbeddedView(this.template,{
         $implicit:item,
         index:index,         
       })
     })
  }

}
