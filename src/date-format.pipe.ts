import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
    name: 'date'
})
export class DateFormatPipe implements PipeTransform {

    transform(date: any) {
       return date;
    }
}

