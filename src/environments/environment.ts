// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  currentWeatherAPIUrl : 'https://api.openweathermap.org/data/2.5/weather?id=3081368&appid=b6827704beef83a1d7119a562241f41d&lang=pl&units=metric',
  forecastWeatherAPIUrl : 'https://api.openweathermap.org/data/2.5/onecall?lat=51.107883&lon=17.038538&exclude=hourly,minutely,current&appid=b6827704beef83a1d7119a562241f41d&lang=pl&units=metric',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
