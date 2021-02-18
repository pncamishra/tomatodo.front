import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TomatodoComponent } from './tomatodo.component';
import { LinkoneComponent } from '../linkone/linkone.component';
import { LinktwoComponent } from '../linktwo/linktwo.component';
const routes: Routes = [
  {
    path: '',
    component: TomatodoComponent,

    children: [
      { path: 'linkone', component: LinkoneComponent },
      { path: 'linktwo', component: LinktwoComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TomatodoRoutingModule {}
