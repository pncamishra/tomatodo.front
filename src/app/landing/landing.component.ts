import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { AuthService } from '@auth0/auth0-angular';
import { concatMap, delay, filter } from 'rxjs/operators';

@Component({
  selector: 'ttd-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit {
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private authService: AuthService) {}

  ngOnInit() {
    /**
     * TODO: can't use Callback component because the app redirects to the root and I'm not sure why
     */
    this.activatedRoute.queryParams
      .pipe(
        filter((queryParams: Params) => queryParams.code && queryParams.state),
        concatMap(() => this.authService.isAuthenticated$),
        filter((isAuthenticated) => isAuthenticated === true),
        delay(500) // Added to fix problem with too fast redirecting
      )
      .subscribe((_) => this.router.navigate(['/tomatodo']));
  }
}
