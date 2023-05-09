import { Pipe, PipeTransform } from '@angular/core';
import { Imovies } from '../model/interface';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: Array<Imovies>, searchString: string): Array<Imovies> {
    console.log(value);
    console.log(searchString);
    
    if(!searchString){
      return value;
    }
    if(!value){
    return [];
    }
    return value.filter(ele => ele.title.toLowerCase().trim().startsWith(searchString.toLowerCase().trim()))
  }

}
