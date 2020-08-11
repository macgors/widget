
// Model after https://openweathermap.org/current API docs

interface Coord {
    // City geo location
    lon: number;
    lat: number;
}

interface Weather {
    id: number; // Weather condition id
    main: string; // Group of weather parameters (Rain, Snow, Extreme etc.)
    description: string; // Weather condition within the group
    icon: string; // Weather icon id
}

interface Main {
    temp: number; // Temperature
    feels_like: number; // Temperature. This temperature parameter accounts for the human perception of weather
    temp_min: number; /* Minimum temperature at the moment.
    This is minimal currently observed temperature (within large megalopolises and urban areas) */
    temp_max: number; // Same as above, but max
    pressure: number; // Atmospheric pressure (on the sea level, if there is no sea_level or grnd_level data), hPa
    humidity: number; // Humidity, %
}

interface Wind {
    speed: number; // Wind speed. Unit Default: meter/sec
    deg: number; // Wind direction, degrees
}
interface Clouds {
    all: number; // Cloudiness, %
}

interface Sys {
    type: number;
    id: number;
    message: number;
    country: string; // Country code (GB, JP etc.)
    sunrise: number; // Sunrise time, unix, UTC
    sunset: number; // Sunset time, unix, UTC
}

export interface WeatherData {
    coord: Coord;
    weather: Weather[];
    base: string;
    main: Main;
    wind: Wind;
    clouds: Clouds;
    dt: number; // Time of data calculation, unix, UTC
    sys: Sys;
    timezone: number; // Shift in seconds from UTC
    id: number; // City ID
    name: string; // City name
    cod: number;
}

// Forecast model section:
// Model after One Call API with only daily allowed
interface Temp {
    day: number;
    min: number;
    max: number;
    night: number;
    eve: number;
    morn: number;
}

interface FeelsLike {
    day: number;
    night: number;
    eve: number;
    morn: number;
}

interface Daily {
    dt: number;
    sunrise: number;
    sunset: number;
    temp: Temp;
    feels_like: FeelsLike;
    pressure: number;
    humidity: number;
    dew_point: number;
    wind_speed: number;
    wind_deg: number;
    weather: Weather[];
    clouds: number;
    pop: number;
    rain: number;
    uvi: number;
}

export interface ForecastWeatherData {
    lat: number;
    lon: number;
    timezone: string;
    timezone_offset: number;
    daily: Daily[];
}







