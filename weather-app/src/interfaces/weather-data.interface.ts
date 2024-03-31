export interface WeatherData {
  coord: Coordinates;
  weather: Weather[];
  base: string;
  main: MainWeatherInfo;
  visibility: number;
  wind: WindInfo;
  clouds: CloudsInfo;
  dt: number;
  sys: SysInfo;
  timezone: number;
  id: number;
  name: string;
  cod: number;
}

interface Coordinates {
  lon: number;
  lat: number;
}

interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

interface MainWeatherInfo {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
  sea_level: number;
  grnd_level: number;
}

interface WindInfo {
  speed: number;
  deg: number;
  gust: number;
}

interface CloudsInfo {
  all: number;
}

interface SysInfo {
  type: number;
  id: number;
  country: string;
  sunrise: number;
  sunset: number;
}
