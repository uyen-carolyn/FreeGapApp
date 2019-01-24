import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
    name: 'time'
})
export class TimeFormatPipe implements PipeTransform {

    transform(time: any) {
        let timeFormat: string;
        if (time.hour > 12) {
            timeFormat = '0' + (time.hour - 12) + ':';
        } else if (time.hour === 0 || time.hour === 12) {
            timeFormat  = '12:';
        } else if (time.hour === 10 || time.hour === 11) {
            timeFormat = time.hour + ':';
        } else {
            timeFormat = timeFormat = '0' + time.hour + ':';
        }
        if (time.minute < 10) {
            timeFormat += '0' + time.minute;
        } else {
            timeFormat += time.minute;
        }
        if (time.hour >= 12 ) {
            timeFormat += ' pm';
        } else {
            timeFormat += ' am';
        }

        return timeFormat;
    }
}


