import { commonSlice } from "./slice";

// slice
export { commonSlice } from "./slice";

// state
export type { CommonState } from "./state/type";

// actions
export const { setIsLogedIn } = commonSlice.actions;

// reducer
export const commonReducer = commonSlice.reducer;
