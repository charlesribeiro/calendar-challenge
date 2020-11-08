import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WeatherInfo } from 'src/app/shared/models/weather';

@Injectable({
  providedIn: 'root'
})
export class WeatherServiceService {
  
  weatherUrl: string;

  constructor(private httpClient: HttpClient) { }

  retrieveAll(): Observable<WeatherInfo[]> {
    return this.httpClient.get<WeatherInfo[]>(this.weatherUrl);
  }
}
