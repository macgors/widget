import { WeatherData, ForecastWeatherData } from './weather-model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { retry, shareReplay } from 'rxjs/operators';
import { environment } from './../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class WeatherApiService {

  constructor(private http: HttpClient) { }

  getCurrentWeatherData(): Observable<WeatherData>{
    return this.http.get<WeatherData>(environment.currentWeatherAPIUrl).pipe(
      retry(3),
     shareReplay()
    );
  }

  // I can't use ONE CALL API for current weather, it doesn't provide all information specified in task
  getForecastData(): Observable<ForecastWeatherData>{
    return this.http.get<ForecastWeatherData>(environment.forecastWeatherAPIUrl).pipe(
      retry(3),
     shareReplay()
    );
  }

}
