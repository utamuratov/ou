import { Component, OnInit } from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [
    ChildComponent
  ],
  template: `
  <h1>Parent</h1>
  <hr>
  <app-child [data]="parentData"></app-child>
  `,
  styleUrl: './parent.component.css',
})
export class ParentComponent implements OnInit { 
  parentData = 2;

  ngOnInit(): void {
    setInterval(() => {
      this.parentData++;
    }, 1000);
  }
}
