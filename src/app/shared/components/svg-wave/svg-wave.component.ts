import { ChangeDetectionStrategy, Component, HostBinding } from '@angular/core';

@Component({
  selector: 'ttd-svg-wave',
  templateUrl: './svg-wave.component.html',
  styleUrls: ['./svg-wave.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgWaveComponent {
  @HostBinding('class') class: 'primary' | 'accent' | 'warn';
}
