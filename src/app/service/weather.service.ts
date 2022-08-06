import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getWeatherData(cityName: string) {
    this.http.get<any>(environment.weaterApiBaseUrl, {
      headers: new HttpHeaders()
        .set(environment.XRapidAPIHostHeaderName, environment.XRapidAPIHostHeaderValue)
        .set(environment.XRapidAPIKeyHeaderName, environment.XRapidAPIKeyHeaderVale),
      params: new HttpParams()
        .set('city', cityName)
    }).subscribe({
      next: (response) => {
        console.log(response)
      }
    })
  }
}
