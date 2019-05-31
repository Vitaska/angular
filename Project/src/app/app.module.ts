import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstCompComponent } from './first-comp/first-comp.component';
import { TwoCompComponent } from './two-comp/two-comp.component';
import { ThreeCompComponent } from './three-comp/three-comp.component';



@NgModule({
  declarations: [
    AppComponent,
    FirstCompComponent,
    TwoCompComponent,
    ThreeCompComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
