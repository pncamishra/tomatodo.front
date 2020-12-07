import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TomatodoComponent } from './tomatodo.component';

const routes: Routes = [{ path: '', component: TomatodoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TomatodoRoutingModule {}
