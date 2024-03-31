export const apiUrls = {
  getWeatherInfo: (
    lat: string,
    lon: string,
    units: string,
    apiKey: string,
    baseUrl: string
  ) =>
    `${baseUrl}/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}`,

  getWeatherForecastInfo: (
    lat: string,
    lon: string,
    units: string,
    apiKey: string,
    baseUrl: string
  ) =>
    `${baseUrl}/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}`,
} as const;
