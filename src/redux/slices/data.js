import { createSlice } from "@reduxjs/toolkit";

export const Weather_Forcast = createSlice({
  name: "Weather_Forcast",
  initialState: {
    weather_data: {},
    forcast_data: [],
  },
  reducers: {
    setWeatherData: (state, action) => {
      state.weather_data = action.payload;
    },
    setForcastData: (state, action) => {
      state.forcast_data = action.payload;
    },
  },
});
export const { setWeatherData, setForcastData } = Weather_Forcast.actions;
export default Weather_Forcast.reducer;
