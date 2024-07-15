import { Pipe, PipeTransform } from '@angular/core';
import { IContent } from './interface';

@Pipe({
  name: 'filterIContent',
  standalone: true
})
export class FilterIContentPipe implements PipeTransform {

  transform(contents: IContent[], type?: string): IContent[] {
    if(!contents){
      return []
    }
    if (!type) {
      return contents.filter(c => !c.type)
    }

    return contents.filter(c => c.type === type);
  }

}
