import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { Container, Grid, Paper, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { Spinner } from "./Spinner";

const WeatherCharts = () => {
  console.log("Inside chart");
  const chartLoading = useSelector((state) => state.loading.chartLoading);
  const forcast_data = useSelector(
    (state) => state.Weather_Forcast.forcast_data
  );
  if (chartLoading) {
    return <Spinner />;
  }
  if (!forcast_data) {
    return <div>No data available </div>;
  }

  console.log("Hello from charts" + forcast_data);
  // Format the data for the charts
  const chartData = forcast_data.map((item) => ({
    dt_txt: item.dt_txt,
    feels_like: (item.main.feels_like - 273.15).toFixed(2),
    temperature: (item.main.temp - 273.15).toFixed(2),
    temp_min: (item.main.temp_min - 273.15).toFixed(2),
    temp_max: (item.main.temp_max - 273.15).toFixed(2),
    pressure: item.main.pressure,
    humidity: item.main.humidity,
    cloud: item.clouds.all,
    wind: item.wind.speed,
    visibility: item.visibility / 100,
    // rain: item.rain ? item.rain["3h"] : 0,
  }));

  return (
    <Container>
      <Typography component="div" variant="h5" gutterBottom>
        Weather Forcast
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Paper elevation={3}>
            <Typography variant="h6" gutterBottom align="center">
              Temperature
            </Typography>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart width={600} height={300} data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="dt_txt" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="temperature"
                  stroke="#8884d8"
                  name="Temperature"
                />
                <Line
                  type="monotone"
                  dataKey="feels_like"
                  stroke="#82ca9d"
                  name="Feels Like"
                />
                <Line
                  type="monotone"
                  dataKey="temp_min"
                  stroke="#ffc658"
                  name="Min Temp"
                />
                <Line
                  type="monotone"
                  dataKey="temp_max"
                  stroke="#ff7300"
                  name="Max Temp"
                />
              </LineChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Paper elevation={3}>
            <Typography variant="h6" gutterBottom align="center">
              Humidity
            </Typography>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart width={600} height={300} data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="dt_txt" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="humidity"
                  stroke="#82ca9d"
                  name="Humidity"
                />
              </LineChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Paper elevation={3}>
            <Typography variant="h6" gutterBottom align="center">
              Cloud Coverage
            </Typography>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart width={600} height={300} data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="dt_txt" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="cloud"
                  stroke="#ffc658"
                  name="Cloud Coverage"
                />
              </LineChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Paper elevation={3}>
            <Typography variant="h6" gutterBottom align="center">
              Wind Speed
            </Typography>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart width={600} height={300} data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="dt_txt" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="wind"
                  stroke="#ff7300"
                  name="Wind Speed"
                />
              </LineChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Paper elevation={3}>
            <Typography variant="h6" gutterBottom align="center">
              Visibility
            </Typography>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart width={600} height={300} data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="dt_txt" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="visibility"
                  stroke="#8884d8"
                  name="Visibility"
                />
              </LineChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Paper elevation={3}>
            <Typography variant="h6" gutterBottom align="center">
              Pressure
            </Typography>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart width={600} height={300} data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="dt_txt" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="pressure"
                  stroke="#8884d8"
                  name="Pressure"
                />
              </LineChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default WeatherCharts;
