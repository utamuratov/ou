import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  template: `<h3>Child</h3>
    Data: {{ data }} `,
  styleUrl: './child.component.css',
})
export class ChildComponent {
  private _data!: number;
  public get data() : number {
    return this._data;
  }
  @Input({ required: true })
  public set data(v : number) {
    this._data = this.calc(v);
  }

  calc(data: number) {
    return data * 2;
  }
}
