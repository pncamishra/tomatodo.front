import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'ttd-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandingComponent {}
