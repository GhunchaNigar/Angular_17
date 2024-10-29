import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myFirstPipe',
  standalone: true
})
export class MyFirstPipePipe implements PipeTransform {

  transform(value:any, ...args: any[]): any {
    
    return 'Wecome: '+value;
  }

}
