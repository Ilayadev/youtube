import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value:any[],text:string,type:string): string[]{
    let array:any[]=[];
    if(value&&text){
      if(type==="filter"){
        value.forEach(x=>{
          if(x.title.includes(text)){
            array.push(x.title)
          }
          if(x.tag.includes(text)){
            array.push(x.tag)
          }
        })
      }else if(type==="searched"){
          array=value.filter(x=> x.title.includes(text)||x.tag.includes(text))
      }
    }    
    return array
  }

}
