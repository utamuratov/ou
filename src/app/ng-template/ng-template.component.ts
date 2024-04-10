import { CommonModule, NgTemplateOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  TypedTemplateContext,
  TypedTemplateDirective,
} from '../../directives/typed-template.directive';
import { MenuDirective } from '../../directives/menu.directive';
import { RouterLink } from '@angular/router';

interface MenuItem {
  link: string;
  label: string;
  icon: string;
  count?: number;
}

interface Sidebar {
  name: string;
  link: string;
}

@Component({
  selector: 'app-ng-template',
  standalone: true,
  imports: [
    RouterLink,
    NgTemplateOutlet,
    MenuDirective,
    TypedTemplateDirective,
  ],
  template: `
    <ul>
      <li>
        <ng-container
          *ngTemplateOutlet="
            templateMenuItem;
            context: {
              $implicit: { label: 'Home', icon: 'home', link: '/home' }
            }
          "
        ></ng-container>
      </li>
      <li>
        <ng-container
          *ngTemplateOutlet="
            templateMenuItem;
            context: {
              $implicit: { label: 'About', icon: 'key', link: '/about' }
            }
          "
        ></ng-container>
      </li>
      <li>
        <ng-container
          *ngTemplateOutlet="
        templateMenuItem;
        context: {
          $implicit: {
            label: 'Shopping cart',
            icon: 'shopping_cart',
            link: '/cart',
            count: 5
          },
        }
      "
        ></ng-container>
      </li>

      <li>
        <ng-container
          *ngTemplateOutlet="
        templateMenuItem;
        context: {
          $implicit: { label: 'Order', icon: 'shopping_cart', link: '/cart', count: 4 },
          
        }
      "
        ></ng-container>
      </li>
      <li>
        <ng-container
          *ngTemplateOutlet="
            templateMenuItem;
            context: {
              $implicit: { label: 'Logout', icon: 'logout', link: '/logout' }
            }
          "
        ></ng-container>
      </li>
    </ul>

    <ng-template [typedTemplate]="MenuContext" #templateMenuItem let-menuItem>
      <a [routerLink]="menuItem.link"
        ><span class="material-symbols-outlined"> {{ menuItem.icon }} </span>
        {{ menuItem.label }}
        <span style="color: red">{{
          menuItem.count ? '+' + menuItem.count : ''
        }}</span></a
      >
    </ng-template>

    <ng-template [typedTemplate]="SidebarContext" #templateSidebar let-sidebar>
      {{ sidebar.name }}
    </ng-template>
  `,
  styleUrl: './ng-template.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgTemplateComponent {
  readonly MenuContext!: TypedTemplateContext<MenuItem>;
  readonly SidebarContext!: TypedTemplateContext<Sidebar>;
}
