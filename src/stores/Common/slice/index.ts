import { createSlice } from "@reduxjs/toolkit";

import { commonReducers } from "../reducers";
import { initialState } from "../state";

export const commonSlice = createSlice({
  name: "common",
  initialState,
  reducers: {
    ...commonReducers,
  },
});
