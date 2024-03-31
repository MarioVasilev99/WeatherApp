import * as React from "react";

import axios, { AxiosResponse } from "axios";
import { useQuery } from "@tanstack/react-query";

import {
  setUnits,
  setError,
  setForecast,
  setLatitude,
  setLongitude,
  unitsSelector,
  useAppDispatch,
  useAppSelector,
  forecastSelector,
  userLocationLatitudeSelector,
  userLocationLongitudeSelector,
} from "../redux";
import { apiUrls } from "../constants";
import { ForecastData } from "../interfaces";

const { useEffect } = React;

export function useApp() {
  const units = useAppSelector(unitsSelector);
  const forecast = useAppSelector(forecastSelector);
  const latitude = useAppSelector(userLocationLatitudeSelector);
  const longitude = useAppSelector(userLocationLongitudeSelector);

  const dispatch = useAppDispatch();

  const city = forecast?.city?.name;

  const handleSetUnits = (units: string) => {
    dispatch(setUnits(units));
  };

  useQuery({
    queryKey: ["GET_FORECAST_INFO", latitude, longitude, units],
    queryFn: async () => {
      const forecast: AxiosResponse<ForecastData> = await axios.get(
        `${apiUrls.getWeatherForecastInfo(
          latitude || "",
          longitude || "",
          units || "metric",
          import.meta.env.VITE_WEATHER_API_KEY,
          import.meta.env.VITE_WEATHER_API_URL
        )}`
      );

      dispatch(setForecast(forecast?.data));
    },
  });

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          dispatch(setLatitude(position.coords.latitude.toString()));
          dispatch(setLongitude(position.coords.longitude.toString()));
        },
        (err) => {
          dispatch(setError(err.message));
        }
      );
    } else {
      dispatch(setError("Geolocation is not supported by this browser."));
    }
    // Must run only on mount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    city,
    units,

    handleSetUnits,
  };
}
