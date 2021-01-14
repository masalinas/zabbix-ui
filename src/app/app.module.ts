import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

// App Components event bus
import { NgEventBus } from 'ng-event-bus';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    NgEventBus
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
