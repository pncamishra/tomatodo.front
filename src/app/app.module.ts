import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CoreModule } from 'core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LinkoneComponent } from './linkone/linkone.component';
import { LinktwoComponent } from './linktwo/linktwo.component';

@NgModule({
  declarations: [AppComponent, LinkoneComponent, LinktwoComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, CoreModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
