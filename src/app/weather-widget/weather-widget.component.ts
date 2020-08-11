import { WeatherData, ForecastWeatherData } from './../weather-model';
import { Component, OnInit, OnDestroy, Input, OnChanges } from '@angular/core';
import { WeatherApiService } from '../weather-api.service';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';


@Component({
  selector: 'app-weather-widget',
  templateUrl: './weather-widget.component.html',
  styleUrls: ['./weather-widget.component.scss']
})
export class WeatherWidgetComponent implements OnInit, OnDestroy, OnChanges {

  @Input() showForecastDays = 0;
  @Input() providedBackgroundPath: string;
  @Input() fullWidthShadow = false;

  weatherData: WeatherData;
  forecastWeatherData: ForecastWeatherData;
  private weatherDataTimer: number; // ID of th schduled timer, so we can cancel it on destroy
  backgroundImgPath: string;

  constructor(private weaterApiService: WeatherApiService) { }

  ngOnInit(): void {
    this.getCurrentWeatherData(5 * 60 * 1000);
    if (this.showForecastDays > 0) { this.getForecastData(); }
  }

  ngOnDestroy(): void{
    // Break recursion timer
    clearTimeout(this.weatherDataTimer);
  }
  ngOnChanges(): void {
    if (this.providedBackgroundPath) { this.backgroundImgPath = this.providedBackgroundPath; }
  }

 /**
  * @param scheduleTime if this argument is provided, the funtion will recursivly
  * call itself again in scheduleNextTime miliseconds with the same argument
  */
  getCurrentWeatherData(scheduleTime?: number): void {
    this.weaterApiService.getCurrentWeatherData().subscribe((data: WeatherData) => {
      this.weatherData = data;
      this.backgroundImgPath = this.getBackgroundImgPath(data);
      if (scheduleTime) {
        this.weatherDataTimer = setTimeout(() => this.getCurrentWeatherData(scheduleTime), scheduleTime);
      }
    });
  }

  getForecastData(): void{
    this.weaterApiService.getForecastData(5).subscribe((data: ForecastWeatherData) => {
      this.forecastWeatherData = data;
    });
  }

 /**
  * Function to get background asset according with day time and/or weather.
  * Ideally, this would be delt with by the back-end, and we would just get an image.
  */
  getBackgroundImgPath(weatherData: WeatherData): string{

    if (this.providedBackgroundPath) { return this.providedBackgroundPath;  }
    const date: Date = new Date(1000 * weatherData.dt + weatherData.timezone);
    const photoDay: number = date.getDay() % 3 + 1;
    const weatherIconID: string = weatherData.weather[0].icon;

    // special weather condition backgrounds
    if (weatherIconID === '11d' || weatherIconID === '09d') { return 'clouds.jpg'; }
    if (weatherIconID === '13d') { return 'snow.jpg'; }
    if (weatherData.main.temp < 0) { return 'ice.jpg'; }

    // time realative backgrounds
    if (date.getHours() >= 7 && date.getHours() <= 9){ return `morning/${photoDay}.jpg`; }
    if (weatherIconID.endsWith('n')){ return `night/${photoDay}.jpg`; }
    return `day/${photoDay}.jpg`;
  }

}
