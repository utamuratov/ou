import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'ng-tempalte',
    loadComponent: () =>
      import('./ng-template/ng-template.component').then(
        (m) => m.NgTemplateComponent
      ),
  },
  {
    path: 'icons',
    loadComponent: () =>
      import('./icons/icons.component').then((m) => m.IconsComponent),
  },
  {
    path: 'problem',
    loadComponent: () =>
      import('./problems/parent/parent.component').then(
        (m) => m.ParentComponent
      ),
  },
];
