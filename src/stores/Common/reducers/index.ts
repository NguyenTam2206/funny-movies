import { PayloadAction } from "@reduxjs/toolkit";
import { CommonState } from "../state/type";
import { WritableDraft } from "immer/dist/types/types-external";

export const commonReducers = {
  setIsLogedIn: (
    state: WritableDraft<CommonState>,
    action: PayloadAction<boolean>
  ): void => {
    const isLogedIn = action.payload;
    state.isLogedIn = isLogedIn;
  },
  setUser: (
    state: WritableDraft<CommonState>,
    action: PayloadAction<string>
  ): void => {
    const user = action.payload;
    state.user = user;
  },
};
