import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

// primeng modules
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';

// import angular envirotment variables
import { environment } from '../environments/environment';

// App Components event bus
import { NgEventBus } from 'ng-event-bus';

import { ApiModule, Configuration, ConfigurationParameters, BASE_PATH } from './shared/backend';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ButtonModule,
    InputTextModule,
    InputTextareaModule
  ],
  providers: [
    NgEventBus,
    {
      provide: Configuration,
      useFactory: () =>
          new Configuration({ basePath: environment.basePath})
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
