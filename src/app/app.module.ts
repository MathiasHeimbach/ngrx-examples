import {
  NgModule,
  NO_ERRORS_SCHEMA,
} from '@angular/core';

import { AppComponent } from './app.component';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { NativeScriptModule } from '@nativescript/angular';
//import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  imports: [
    NativeScriptModule,
    //AppRoutingModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
  ],

  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}