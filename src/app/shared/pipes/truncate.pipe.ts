import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {
  transform(value: string, limit: number): string {
    if (value.length <= limit) {
      return value;
    }
    const truncated = value.substring(0, limit);
    const lastSpace = truncated.lastIndexOf(' ');
    return lastSpace > -1 ? truncated.substring(0, lastSpace) + '...' : truncated;
  }
}
