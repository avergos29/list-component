import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterpostit'
})
export class FilterPipe implements PipeTransform {

  transform(values: any[], args?: any): any {
    return values.filter( item => item.status.identifier === args);
  }

}
