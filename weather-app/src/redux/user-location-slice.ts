import { createSlice, PayloadAction, createSelector } from "@reduxjs/toolkit";

import { RootState } from "./redux-hooks";

const initialState: UserLocationState = {
  error: null,
  latitude: null,
  longitude: null,
};

export type UserLocationState = {
  error: string | null;
  latitude: string | null;
  longitude: string | null;
};

export const userLocationSlice = createSlice({
  name: "userLocation",
  initialState,
  reducers: {
    setError: (state, { payload }: PayloadAction<string>) => {
      state.error = payload;
    },

    setLatitude: (state, { payload }: PayloadAction<string>) => {
      state.latitude = payload;
    },

    setLongitude: (state, { payload }: PayloadAction<string>) => {
      state.longitude = payload;
    },
  },
});

export const userLocationReducer = userLocationSlice.reducer;
export const { setError, setLatitude, setLongitude } =
  userLocationSlice.actions;

const userLocationState = (state: RootState) => state.userLocation;

export const userLocationErrorSelector = createSelector(
  userLocationState,
  (state) => state.error
);

export const userLocationLatitudeSelector = createSelector(
  userLocationState,
  (state) => state.latitude
);

export const userLocationLongitudeSelector = createSelector(
  userLocationState,
  (state) => state.longitude
);
