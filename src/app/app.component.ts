import { Component } from '@angular/core';
import { WeatherService } from './service/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private weatherService:WeatherService) {}

  title = 'WeatherNow';

  getInfo() {
    this.weatherService.getWeatherData('mumbai');
  }
}
