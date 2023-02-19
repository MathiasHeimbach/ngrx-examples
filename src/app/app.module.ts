import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { StoreModule } from '@ngrx/store';
import { counterReducer } from './counter';
import { AppComponent } from './app.component';
import { appenderReducer } from './appender';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ counter: counterReducer, appender: appenderReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
