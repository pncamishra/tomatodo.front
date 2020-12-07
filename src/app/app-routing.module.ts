import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@auth0/auth0-angular';

const routes: Routes = [
  { path: '', loadChildren: () => import('./landing/landing.module').then((module) => module.LandingModule) },
  {
    path: 'tomatodo',
    loadChildren: () => import('./tomatodo/tomatodo.module').then((m) => m.TomatodoModule),
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'top',
      anchorScrolling: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
