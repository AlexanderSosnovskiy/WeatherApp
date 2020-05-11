import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import {NguiAutoCompleteModule} from '@ngui/auto-complete';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { WeatherCardComponent } from './ui/weather-card/weather-card.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherCardComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    HttpClientModule,
    NguiAutoCompleteModule,
    FormsModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}