import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from 'shared/components';
import { SvgWaveComponent } from './components/svg-wave/svg-wave.component';
import { MaterialModule } from './material/material.module';

const components = [HeaderComponent];

@NgModule({
  declarations: [...components, SvgWaveComponent],
  imports: [CommonModule, RouterModule, MaterialModule],
  exports: [...components, MaterialModule, SvgWaveComponent],
})
export class SharedModule {}
