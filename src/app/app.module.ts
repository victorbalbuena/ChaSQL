import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {ComponentsModule} from "./components/components.module";
import {SharedModule} from "./shared/shared.module";

@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
        BrowserModule,
        ComponentsModule,
        SharedModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
