import { ChangeDetectionStrategy, Component } from '@angular/core';

import { AuthService } from 'core/services';

@Component({
  selector: 'ttd-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  constructor(private authService: AuthService) {}

  singIn() {
    console.log('Sign in');
  }
}
