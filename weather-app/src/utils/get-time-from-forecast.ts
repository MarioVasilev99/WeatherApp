import { ForecastItem } from "../interfaces";

export const getTimeFromForecast = (forecast: ForecastItem) => {
  const forecastDate = forecast?.dt_txt;

  if (!forecastDate) return "";

  return forecast.dt_txt.split(" ")[1];
};
