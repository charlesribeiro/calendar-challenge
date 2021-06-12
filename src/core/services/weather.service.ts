import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { WeatherInfo } from '../../app/shared/models/weather';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  weatherUrl: string;
  daysToShowAhead = 10;
  API_KEY = 'f0d3699f3ec772c2a2d478d65fe51c2c';

  constructor(private httpClient: HttpClient) {
  }

  retrieveForecastForFiveDays(city: string): Observable<WeatherInfo> {
    return this.httpClient.get<WeatherInfo>(this.getUrlForFiveDayForecast(city));
  }

  getUrlForFiveDayForecast(city: string): string{
    return `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${this.API_KEY}`;
  }

  getUrlForForecastIcon(weatherCode: string): string{
    return `http://openweathermap.org/img/wn/${weatherCode}@2x.png`;
  }
}
