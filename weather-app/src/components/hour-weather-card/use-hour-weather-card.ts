import { useNavigate } from "react-router-dom";

import { ForecastItem } from "../../interfaces";
import { getTimeFromForecast } from "../../utils";

export function useHourWeatherCard(forecastItem: ForecastItem) {
  const navigate = useNavigate();

  const icon = forecastItem?.weather[0]?.icon;
  const time = getTimeFromForecast(forecastItem);
  const temp = Math.round(forecastItem?.main?.temp);

  return {
    icon,
    time,
    temp,

    navigate,
  };
}
