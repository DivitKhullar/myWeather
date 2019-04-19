import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { WeatherDataService } from './weather-data.service';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { InputBoxComponent } from './input-box/input-box.component';
import { DisplayboxComponent } from './displaybox/displaybox.component';

@NgModule({
  declarations: [
    AppComponent,
    InputBoxComponent,
    DisplayboxComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [WeatherDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
