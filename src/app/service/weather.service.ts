import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { WeatherData } from '../model/weather.model';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  // getWeatherData(cityName: string,units:string): Observable<WeatherData> {
  //   return this.http.get<WeatherData>(environment.weaterApiBaseUrl, {
  //     headers: new HttpHeaders()
  //       .set(environment.XRapidAPIHostHeaderName, environment.XRapidAPIHostHeaderValue)
  //       .set(environment.XRapidAPIKeyHeaderName, environment.XRapidAPIKeyHeaderVale),
  //     params: new HttpParams()
  //       .set('city', cityName)
  //   })
  // }

  //using httpClient method
  getWeatherData(cityName: string,units:string): Observable<WeatherData> {
    return this.http.get<WeatherData>(environment.weaterApiBaseUrl, {
      params: new HttpParams()
        .set('q', cityName)
        .set('units',units)
        .set('appid', environment.ApiKey)
    })
  }
}
