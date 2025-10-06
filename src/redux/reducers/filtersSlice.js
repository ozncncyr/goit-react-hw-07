import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  search: "",
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    changeFilter(state, action) {
      state.search = action.payload;
      return state;
    },
  },
  selectors: {
    selectNameFilter: (state) => state.search,
  },
});

export const { changeFilter } = filtersSlice.actions;
export default filtersSlice.reducer;
export const { selectNameFilter } = filtersSlice.selectors;
