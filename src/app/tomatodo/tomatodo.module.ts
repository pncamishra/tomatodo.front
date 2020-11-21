import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TomatodoRoutingModule } from './tomatodo-routing.module';
import { TomatodoComponent } from './tomatodo.component';
import { TomatodoListComponent } from './tomatodo-list/tomatodo-list.component';
import { TomatodoTaskComponent } from './tomatodo-task/tomatodo-task.component';

@NgModule({
  declarations: [TomatodoComponent, TomatodoListComponent, TomatodoTaskComponent],
  imports: [CommonModule, TomatodoRoutingModule],
})
export class TomatodoModule {}