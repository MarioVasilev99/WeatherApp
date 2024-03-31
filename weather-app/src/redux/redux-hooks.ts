import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";

import { reduxStore } from "./redux-store";

export type AppDispatch = typeof reduxStore.dispatch;

export type RootState = ReturnType<typeof reduxStore.getState>;

// Use throughout the app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
