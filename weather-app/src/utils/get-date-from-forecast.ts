import { ForecastItem } from "../interfaces";

export const getDateFromForecast = (forecast: ForecastItem) => {
  const forecastDate = forecast?.dt_txt;

  if (!forecastDate) return "";

  return forecast.dt_txt.split(" ")[0];
};
