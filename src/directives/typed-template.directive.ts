import { Directive, Input } from '@angular/core';

export interface TypedTemplateContext<T> {
  $implicit: T;
}

/**
 * * USEFUL LINK: https://medium.com/@thomas.laforge/ngtemplateoutlet-type-checking-5d2dcb07a2c6
 * * AND OPTIMIZED IT
 */
@Directive({
  selector: 'ng-template[typedTemplate]',
  standalone: true,
})
export class TypedTemplateDirective<T> {
  @Input('typedTemplate')
  typeOfContext!: (new (...args: any[]) => T) | T;
  static ngTemplateContextGuard<TContext>(
    dir: TypedTemplateDirective<TContext>,
    ctx: unknown
  ): ctx is TContext {
    return true;
  }
}
