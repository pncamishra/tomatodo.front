import { NgModule } from '@angular/core';

import { HeaderComponent } from 'shared/components';

const components = [HeaderComponent];

@NgModule({
  declarations: [...components],
  imports: [],
  exports: [HeaderComponent],
})
export class SharedModule {}
