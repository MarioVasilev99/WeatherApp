import { createSlice, PayloadAction, createSelector } from "@reduxjs/toolkit";

import { RootState } from "./redux-hooks";
import { ForecastData } from "../interfaces";

export type ForecastState = {
  selectedDate: string | null;
  forecast: ForecastData | null;
};

const initialState: ForecastState = {
  forecast: null,
  selectedDate: null,
};

export const forecastSlice = createSlice({
  name: "forecast",
  initialState,
  reducers: {
    setForecast: (state, { payload }: PayloadAction<ForecastData>) => {
      state.forecast = payload;
    },
    setSelectedDate: (state, { payload }: PayloadAction<string>) => {
      state.selectedDate = payload;
    },
  },
});

export const forecastReducer = forecastSlice.reducer;
export const { setForecast, setSelectedDate } = forecastSlice.actions;

const forecastState = (state: RootState) => state.forecast;

export const forecastSelector = createSelector(
  forecastState,
  (state) => state.forecast
);

export const selectedDateSelector = createSelector(
  forecastState,
  (state) => state.selectedDate
);
