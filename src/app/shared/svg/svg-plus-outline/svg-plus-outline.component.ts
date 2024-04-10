import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'svg-plus-outline',
  standalone: true,
  imports: [CommonModule],
  template: `
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M1.25 12C1.25 6.08579 6.08579 1.25 12 1.25C17.9142 1.25 22.75 6.08579 22.75 12C22.75 17.9142 17.9142 22.75 12 22.75C6.08579 22.75 1.25 17.9142 1.25 12ZM12 2.75C6.91421 2.75 2.75 6.91421 2.75 12C2.75 17.0858 6.91421 21.25 12 21.25C17.0858 21.25 21.25 17.0858 21.25 12C21.25 6.91421 17.0858 2.75 12 2.75ZM7.25 12C7.25 11.5858 7.58579 11.25 8 11.25H11.25V8C11.25 7.58579 11.5858 7.25 12 7.25C12.4142 7.25 12.75 7.58579 12.75 8V11.25H16C16.4142 11.25 16.75 11.5858 16.75 12C16.75 12.4142 16.4142 12.75 16 12.75H12.75V16C12.75 16.4142 12.4142 16.75 12 16.75C11.5858 16.75 11.25 16.4142 11.25 16V12.75H8C7.58579 12.75 7.25 12.4142 7.25 12Z"
        [attr.fill]="fill"
      />
    </svg>
  `,
  styleUrl: './svg-plus-outline.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgPlusOutlineComponent {
  @Input()
  fill = 'black';
}
