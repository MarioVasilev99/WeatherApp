import * as React from "react";

import { getDateFromForecast } from "../../utils";
import { ForecastItem, ForecastData } from "../../interfaces";
import { useAppSelector, forecastSelector } from "../../redux";

const { useMemo } = React;

export function useHomePage() {
  const forecast = useAppSelector(forecastSelector);

  const fiveDayForecast = useMemo(() => {
    const extractFiveDayForecast = (forecastData: ForecastData | null) => {
      if (!forecastData) return [];

      const forecastByDay: ForecastItem[] = [];
      forecastData.list.forEach((forecastItem) => {
        if (
          !forecastByDay.find(
            (i) => getDateFromForecast(i) === getDateFromForecast(forecastItem)
          )
        )
          forecastByDay.push(forecastItem);
      });

      return forecastByDay.slice(0, 5);
    };

    return extractFiveDayForecast(forecast);
  }, [forecast]);

  return {
    fiveDayForecast,
  };
}
