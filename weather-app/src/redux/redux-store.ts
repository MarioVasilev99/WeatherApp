import { configureStore } from "@reduxjs/toolkit";

import { forecastReducer } from "./forecast-slice";
import { settingsReducer } from "./settings-slice";
import { userLocationReducer } from "./user-location-slice";

export const reduxStore = configureStore({
  reducer: {
    forecast: forecastReducer,
    settings: settingsReducer,
    userLocation: userLocationReducer,
  },
});
