import * as React from "react";

import { useNavigate } from "react-router-dom";

import {
  useAppSelector,
  forecastSelector,
  selectedDateSelector,
} from "../../redux";
import { ForecastData } from "../../interfaces";
import { getDateFromForecast } from "../../utils";

const { useMemo } = React;

export function useHourlyForecastPage() {
  const navigate = useNavigate();
  const forecast = useAppSelector(forecastSelector);
  const selectedDate = useAppSelector(selectedDateSelector);

  const hourlyForecast = useMemo(() => {
    const extractHourlyForecast = (forecastData: ForecastData | null) => {
      if (!forecastData) return [];

      return forecastData.list.filter(
        (forecastItem) => getDateFromForecast(forecastItem) === selectedDate
      );
    };

    return extractHourlyForecast(forecast);
  }, [forecast, selectedDate]);

  const navigateToHomePage = () => {
    navigate("/");
  };

  return {
    hourlyForecast,

    navigateToHomePage,
  };
}
