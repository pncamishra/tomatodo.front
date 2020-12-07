import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '@auth0/auth0-angular';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments';

@Component({
  selector: 'ttd-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {
  @Input() page: 'Landing' | 'Application';

  isAuthenticated$: Observable<boolean>;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.isAuthenticated$ = this.authService.isAuthenticated$;
    // this.authService.user$.subscribe(console.log);
  }

  singInOrGoToApp() {
    return this.router.navigate(['/tomatodo']);
  }

  singOut() {
    this.authService.logout({
      returnTo: environment.auth0.logoutUrl,
    });
  }
}
