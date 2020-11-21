import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HeaderComponent } from 'shared/components';
import { MaterialModule } from './material/material.module';

const components = [HeaderComponent];

@NgModule({
  declarations: [...components],
  imports: [CommonModule, MaterialModule],
  exports: [...components, MaterialModule],
})
export class SharedModule {}
