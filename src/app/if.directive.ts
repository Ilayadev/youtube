import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appIf]'
})
export class IfDirective implements OnInit{

  constructor(private template:TemplateRef<any>,private container:ViewContainerRef) { }
  @Input() set 'appIf'(condition:boolean){   
    if(condition){
      this.container.createEmbeddedView(this.template)
    }else{
      this.container.clear()
    }
  }
  ngOnInit(): void {     
  }

}
