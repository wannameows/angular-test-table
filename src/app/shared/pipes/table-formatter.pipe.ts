import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'tableFormatter'})
export class TableFormatterPipe implements PipeTransform {
  transform(value: any): any {
    switch (typeof value) {
      case 'string':
        return value.length <= 30 ? value : value.substr(0, value.substr(0, 27).lastIndexOf(' ')) + '...';
      case 'number':
        return value;
    }
  }
}
