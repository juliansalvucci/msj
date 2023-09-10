import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MensajeriaModule } from 'src/modules/mensajeria/mensajeria.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, BrowserAnimationsModule, MensajeriaModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
