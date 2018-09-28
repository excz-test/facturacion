import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddCardComponent } from './ui/add-card/add-card/add-card.component';
import { WeatherCardComponent } from './ui/weather-card/weather-card/weather-card.component';

@NgModule({
  declarations: [
    AppComponent,
    AddCardComponent,
    WeatherCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
