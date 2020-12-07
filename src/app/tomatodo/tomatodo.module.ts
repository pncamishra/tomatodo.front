import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from 'shared';
import { TomatodoListComponent } from './tomatodo-list/tomatodo-list.component';
import { TomatodoRoutingModule } from './tomatodo-routing.module';
import { TomatodoTaskComponent } from './tomatodo-task/tomatodo-task.component';
import { TomatodoComponent } from './tomatodo.component';

@NgModule({
  declarations: [TomatodoComponent, TomatodoListComponent, TomatodoTaskComponent],
  imports: [CommonModule, TomatodoRoutingModule, SharedModule],
})
export class TomatodoModule {}
