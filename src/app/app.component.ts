import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { WeatherData } from './model/weather.model';
import { WeatherService } from './service/weather.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private weatherService: WeatherService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.cityName = 'Kochi';
    this.weatherService.getWeatherData(this.cityName, this.units)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.weatherData = res;
        }
      });
  }

  title = 'WeatherNow';
  cityName: string = '';
  units: string = 'metric'
  weatherData?: WeatherData;
  errCode: number = 0;

  // getInfo() {
  //   this.weatherService.getWeatherData(this.cityName)
  //     .subscribe({
  //       next: (res) => {
  //         console.log(res);
  //       }
  //     })
  // }

  onSubmit() {
    this.getInfo(this.cityName);
  }

  private getInfo(city: string, units: string = 'metric') {
    this.weatherService.getWeatherData(city, units)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.weatherData = res;
        },
        error: (err) => {
          console.log(`${city} isn't a valid city name`);
          console.log(err.error.cod);
          console.log(err.error.message);
          // alert(`${city} isn't a valid city name`);

          // using ngz toaster
          // this.toastr.error(`${city} isn't a valid city name`,'ERROR',{
          //   closeButton: true,
          //   progressBar: true,
          //   toastClass: 'ngx-toastr',
          //   positionClass: 'toast-top-right'
          // });

          //using boostrap toaster
          this.errCode = 1;
          setTimeout(() => {
            this.errCode = 0;
          }, 5000);
        }
      });
  }
}
