import { Component, OnInit } from '@angular/core';
import { WeatherDataService } from './weather-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  city: string;
  result: any;
  constructor(private data:WeatherDataService) {
  }

  ngOnInit()
  {
    this.data.getWeather('').subscribe((data)=>{
      this.result = data;
    });
  }

  getCity() {
    this.data.getWeather(this.city).subscribe((data)=>{
      this.result = data;
      console.log(data);
    });
  }
}
