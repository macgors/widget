import { WeatherData, ForecastWeatherData } from './weather-model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class WeatherApiService {

  currentWeatherUrlApi = 'https://api.openweathermap.org/data/2.5/weather?id=3081368&appid=b6827704beef83a1d7119a562241f41d&lang=pl&units=metric';
  forecastWeatherUrlApi = 'https://api.openweathermap.org/data/2.5/onecall?lat=51.107883&lon=17.038538&exclude=hourly,minutely,current&appid=b6827704beef83a1d7119a562241f41d&lang=pl&units=metric';

  constructor(private http: HttpClient) { }

  getCurrentWeatherData(): Observable<WeatherData>{
    return this.http.get<WeatherData>(this.currentWeatherUrlApi);
  }

  // I can't use ONE CALL API for current weather, it doesn't provide all information specified in task
  getForecastData(days: number): Observable<ForecastWeatherData>{
    return this.http.get<ForecastWeatherData>(this.forecastWeatherUrlApi);
  }

}
