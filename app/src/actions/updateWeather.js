import axios from "axios";
import { weatherURL } from "../configs/weather";

const UPDATE_WEATHER = "UPDATE_WEATHER";
const UPDATE_WEATHER_FAILED = "UPDATE_WEATHER_FAILED";

export const updateWeather = weatherData => {
  return {
    type: UPDATE_WEATHER,
    payload: weatherData
  };
};

export const dispatchWeather = geometry => dispatch => {
  const { lat, lng } = geometry;
  return axios
    .get(weatherURL(lat, lng))
    .then(result => {
      dispatch({
        type: UPDATE_WEATHER,
        payload: result.data
      });
    })
    .catch(error => {
      dispatch({
        type: UPDATE_WEATHER_FAILED,
        payload: error.data
      });
    });
};
