import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddCardComponent } from './ui/add-card/add-card/add-card.component';
import { WeatherCardComponent } from './ui/weather-card/weather-card/weather-card.component';
import { AddComponent } from './pages/add/add.component';
import { LoginComponent } from './pages/login/login.component';
import { SingupComponent } from './pages/singup/singup.component';
import { HomeComponent } from './pages/home/home.component';
import { DetailsComponent } from './pages/details/details.component';
import { WeatherService } from './services/weather/weather.service';
import { UiService } from './services/ui.service';

@NgModule({
  declarations: [
    AppComponent,
    AddCardComponent,
    WeatherCardComponent,
    HomeComponent,
    DetailsComponent,
    AddComponent,
    LoginComponent,
    SingupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    WeatherService,
    UiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
