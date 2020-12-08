import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '@auth0/auth0-angular';
import { Select, Store } from '@ngxs/store';
import { UpdateAuthentication, UpdateUser } from 'core/actions/user.actions';
import { User } from 'core/models';
import { UserState } from 'core/state';
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

  @Select(UserState.isAuthenticated) isAuthenticated$: Observable<boolean>;
  @Select(UserState.getUser) user$: Observable<User>;

  constructor(private authService: AuthService, private router: Router, private store: Store) {}

  ngOnInit() {
    this.authService.isAuthenticated$.subscribe((isAuthenticated) =>
      this.store.dispatch(new UpdateAuthentication(isAuthenticated))
    );
    this.authService.user$.subscribe((user) => this.store.dispatch(new UpdateUser(user)));
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
