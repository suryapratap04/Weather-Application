import { createSlice } from "@reduxjs/toolkit";

export const loading = createSlice({
  name: "Loading",
  initialState: {
    chartLoading: true,
    cardLoading: true,
  },
  reducers: {
    setChartLoading: (state, action) => {
      state.chartLoading = action.payload;
    },
    setCardLoading: (state, action) => {
      state.cardLoading = action.payload;
    },
  },
});

export const { setCardLoading, setChartLoading } = loading.actions;
export default loading.reducer;
