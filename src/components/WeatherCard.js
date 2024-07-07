import React from "react";
import {
  Card,
  CardContent,
  Typography,
  CardMedia,
  Grid,
  Box,
} from "@mui/material";
import moment from "moment";
import { Spinner } from "./Spinner";
import { useSelector } from "react-redux";

// Convert Kelvin to Celsius
const kelvinToCelsius = (temp) => (temp - 273.15).toFixed(2);

const WeatherCard = () => {
  const cardLoading = useSelector((state) => state.loading.cardLoading);
  const data = useSelector((state) => state.Weather_Forcast.weather_data);

  if (cardLoading) {
    return <Spinner />;
  }
  const { name, weather, main, wind, sys } = data;

  if (!weather || !main || !sys) {
    return <div>No data available</div>;
  }

  console.log("Indeise Data" + data);

  const weatherIcon = `http://openweathermap.org/img/wn/${weather[0].icon}.png`;

  return (
    <Card sx={{ maxWidth: 400, margin: "auto", mt: 5 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {sys.country}
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mt: 2,
          }}
        >
          <CardMedia
            component="img"
            sx={{ width: 100 }}
            image={weatherIcon}
            alt={weather[0].main}
          />
          <Box sx={{ ml: 2 }}>
            <Typography variant="h6">{weather[0].main}</Typography>
            <Typography variant="body2" color="text.secondary">
              {weather[0].description}
            </Typography>
          </Box>
        </Box>
        <Typography variant="h4" component="div" sx={{ mt: 2 }}>
          {kelvinToCelsius(main.temp)}°C
        </Typography>
        <Grid container spacing={2} sx={{ mt: 2 }}>
          <Grid item xs={6}>
            <Typography variant="body2" color="text.secondary">
              Feels like: {kelvinToCelsius(main.feels_like)}°C
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body2" color="text.secondary">
              Humidity: {main.humidity}%
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body2" color="text.secondary">
              Wind: {wind.speed} m/s
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body2" color="text.secondary">
              Pressure: {main.pressure} hPa
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body2" color="text.secondary">
              Sunrise: {moment.unix(sys.sunrise).format("HH:mm A")}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Sunset: {moment.unix(sys.sunset).format("HH:mm A")}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default WeatherCard;
