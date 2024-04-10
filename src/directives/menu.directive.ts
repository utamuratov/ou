import { Directive } from '@angular/core';

interface MenuItem {
  link: string;
  label: string;
  icon: string;
}

interface MenuContext {
  $implicit: MenuItem;
  count?: number;
}

@Directive({
  selector: 'ng-template[menu]',
  standalone: true,
})
export class MenuDirective {
  static ngTemplateContextGuard(
    dir: MenuDirective,
    ctx: unknown
  ): ctx is MenuContext {
    return true;
  }
}
