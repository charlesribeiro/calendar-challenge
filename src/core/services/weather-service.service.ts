import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WeatherInfo } from 'src/app/shared/models/weather';

@Injectable({
  providedIn: 'root'
})
export class WeatherServiceService {
  
  weatherUrl: string;
  daysToShowAhead: number = 10;
  API_KEY: string = "f0d3699f3ec772c2a2d478d65fe51c2c";

  constructor(private httpClient: HttpClient) {
   }


  retrieveForecastForFiveDays(city: String): Observable<WeatherInfo> {
    return this.httpClient.get<WeatherInfo>(this.getUrlForFiveDayForecast(city));
  }

  getUrlForFiveDayForecast(city: String){
    // return `http://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&cnt=${this.daysToShowAhead}&APPID=${this.API_KEY}` 
    // return "http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=f0d3699f3ec772c2a2d478d65fe51c2c" 
    return `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${this.API_KEY}`
    // return `http://api.openweathermap.org/data/2.5/forecast/daily?q=London&mode=xml&units=metric&cnt=2&appid=${this.API_KEY}`; 
 
  }
}

// Request URL: http://api.openweathermap.org/data/2.5/forecast/daily?q=Curitiba&cnt=10&appid=5fd6ef251ae28a6cb0b67ee8f9fb7c5e
//              http://api.openweathermap.org/data/2.5/forecast/city?id=524901&APPID=410463b3935acea56c8171825dbb4440