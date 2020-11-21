import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxsDevtoolsOptions, NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsFormPluginModule } from '@ngxs/form-plugin';
import { NgxsLoggerPluginModule, NgxsLoggerPluginOptions } from '@ngxs/logger-plugin';
import { NgxsModule, NgxsModuleOptions } from '@ngxs/store';

import { environment } from '../../environments';

const ngxsConfig: NgxsModuleOptions = {
  developmentMode: !environment.production,
  selectorOptions: {
    suppressErrors: false,
    injectContainerState: false,
  },
};
const ngxsStates = [];

const ngxsLoggerConfig: NgxsLoggerPluginOptions = {
  disabled: environment.production,
};
const ngxsDevtoolsConfig: NgxsDevtoolsOptions = {
  disabled: environment.production,
};

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgxsModule.forRoot(ngxsStates, ngxsConfig),
    NgxsFormPluginModule.forRoot(),
    NgxsLoggerPluginModule.forRoot(ngxsLoggerConfig),
    NgxsReduxDevtoolsPluginModule.forRoot(ngxsDevtoolsConfig),
  ],
  exports: [NgxsModule, NgxsLoggerPluginModule],
})
export class CoreModule {}
