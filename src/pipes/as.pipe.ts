import { Pipe, type PipeTransform } from '@angular/core';

/**
 * https://stackoverflow.com/a/66154034/11468858
 */
@Pipe({
  name: 'as',
  standalone: true,
  pure: true,
})
export class AsPipe implements PipeTransform {
  transform<T>(value: any, _type: (new (...args: any[]) => T) | T): T {
    return value as T;
  }
}
