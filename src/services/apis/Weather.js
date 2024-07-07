import { setWeatherData, setForcastData } from "../../redux/slices/data";
import { setChartLoading, setCardLoading } from "../../redux/slices/loading";
const API_KEY = "669fe736ad449ae4740bc9fcef4c825e";

// Action to fetch single day weather data
export const location_single_day = (latitude, longitude) => {
  console.log("inside single day");
  return async (dispatch) => {
    dispatch(setCardLoading(true));
    dispatch(setChartLoading(true));

    try {
      let response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`
      );
      let data = await response.json();
      dispatch(setWeatherData(data));
      dispatch(location_five_days_forcast(latitude, longitude)); // Fetch 5-day forecast
    } catch (error) {
      console.error("Error fetching single day weather data:", error);
      // Optionally handle error state
    } finally {
      dispatch(setCardLoading(false));
    }
  };
};

// Action to fetch five day forecast data
export const location_five_days_forcast = (latitude, longitude) => {
  console.log("inside five day");

  return async (dispatch) => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`
      );
      const data = await response.json();
      console.log(data.list);
      dispatch(setForcastData(data.list));
    } catch (error) {
      console.error("Error fetching five day forecast data:", error);
      // Optionally handle error state
    } finally {
      dispatch(setChartLoading(false));
    }
  };
};

// Action to fetch city five day forecast data
export const city_five_days_forcast = (city_name) => {
  console.log("inside city five");

  return async (dispatch) => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city_name}&appid=${API_KEY}`
      );
      const data = await response.json();
      dispatch(setForcastData(data.list));
    } catch (error) {
      console.error("Error fetching city five day forecast data:", error);
      // Optionally handle error state
    } finally {
      dispatch(setChartLoading(false));
    }
  };
};

// Action to fetch city single day weather data
export const city_single_day = (city_name) => {
  console.log("inside city single");

  return async (dispatch) => {
    dispatch(setCardLoading(true));
    dispatch(setChartLoading(true));

    try {
      let response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${API_KEY}`
      );
      let data = await response.json();
      dispatch(setWeatherData(data));
      dispatch(city_five_days_forcast(city_name)); // Fetch city 5-day forecast
    } catch (error) {
      console.error("Error fetching city single day weather data:", error);
      // Optionally handle error state
    } finally {
      dispatch(setCardLoading(false));
    }
  };
};

// Function to get geolocation and fetch weather data
export const getLocation = () => {
  console.log("inside geolocation");

  return (dispatch) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          dispatch(location_single_day(latitude, longitude));
        },
        (error) => {
          console.error("Error getting geolocation:", error);
          // Optionally handle error state
        }
      );
    } else {
      alert("Your browser does not support location detection.");
    }
  };
};
