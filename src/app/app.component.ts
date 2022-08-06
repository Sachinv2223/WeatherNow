import { Component, OnInit } from '@angular/core';
import { WeatherData } from './model/weather.model';
import { WeatherService } from './service/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.cityName = 'Kochi';
    this.weatherService.getWeatherData(this.cityName)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.weatherData = res;
        }
      });
  }

  title = 'WeatherNow';
  cityName: string = '';
  cityName2: string = '';
  weatherData?: WeatherData;

  // getInfo() {
  //   this.weatherService.getWeatherData(this.cityName)
  //     .subscribe({
  //       next: (res) => {
  //         console.log(res);
  //       }
  //     })
  // }

  onSubmit() {
    this.cityName = this.cityName2;
    this.getInfo(this.cityName);
    this.cityName2 = '';
  }

  private getInfo(city: string) {
    this.weatherService.getWeatherData(city)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.weatherData = res;
        }
      });
  }
}
