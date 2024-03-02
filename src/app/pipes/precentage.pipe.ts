import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'percentage',
  standalone: true
})
export class PercentagePipe implements PipeTransform {
  transform(value: number): string {
    // Check if value is a number
    if (isNaN(value)) {
      return 'Invalid input';
    }
   const intValue = Math.round(value * 10);

   return `${intValue}%`;
  }
}