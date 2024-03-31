import { createSlice, PayloadAction, createSelector } from "@reduxjs/toolkit";

import { RootState } from "./redux-hooks";

export type SettingsState = {
  units: string | null;
};

const initialState: SettingsState = {
  units: "metric",
};

export const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    setUnits: (state, { payload }: PayloadAction<string>) => {
      state.units = payload;
    },
  },
});

export const settingsReducer = settingsSlice.reducer;
export const { setUnits } = settingsSlice.actions;

const settingsState = (state: RootState) => state.settings;

export const unitsSelector = createSelector(
  settingsState,
  (state) => state.units
);
