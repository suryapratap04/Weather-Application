import { configureStore } from "@reduxjs/toolkit";
import loading from "./slices/loading";
import Weather_Forcast from "./slices/data";

export const store = configureStore({
  reducer: {
    loading: loading,
    Weather_Forcast: Weather_Forcast,
  },
});
export default store;
