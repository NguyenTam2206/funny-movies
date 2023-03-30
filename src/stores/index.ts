import { configureStore } from "@reduxjs/toolkit";
import { combineReducers, Reducer } from "redux";
import { commonReducer, CommonState } from "~/stores/Common";

export type RootState = {
  commonState: CommonState;
};

export const rootReducer: Reducer<RootState> = combineReducers<RootState>({
  commonState: commonReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
