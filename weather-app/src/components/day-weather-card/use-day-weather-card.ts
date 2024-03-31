import { useNavigate } from "react-router-dom";

import { ForecastItem } from "../../interfaces";
import { getDateFromForecast } from "../../utils";
import { setSelectedDate, useAppDispatch } from "../../redux";

export function useDayWeatherCard(forecastItem: ForecastItem) {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleWeatherCardClick = () => {
    dispatch(setSelectedDate(date));
    navigate("/hourly-forecast");
  };

  const icon = forecastItem?.weather[0]?.icon;
  const date = getDateFromForecast(forecastItem);
  const maxTemperature = Math.round(forecastItem?.main?.temp_max);
  const minTemperature = Math.round(forecastItem?.main?.temp_min);

  return {
    icon,
    date,
    maxTemperature,
    minTemperature,

    handleWeatherCardClick,
  };
}
