import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'customDate',standalone:true
})
export class CustomDatePipe implements PipeTransform {
  constructor(private datePipe: DatePipe) {}

  transform(date: Date | string): string {
    return this.datePipe.transform(date, 'MMM d, y') || '';
  }
}
