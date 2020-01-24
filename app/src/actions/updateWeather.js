const UPDATE_WEATHER = "UPDATE_WEATHER";
export const updateWeather = weatherData => {
  return {
    type: UPDATE_WEATHER,
    payload: weatherData
  };
};
