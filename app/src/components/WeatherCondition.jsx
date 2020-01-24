import React from "react";
import moment from "moment";
import { WeatherCard } from "./Styles";
import {
  WiCloudy,
  WiNightClear,
  WiThunderstorm,
  WiShowers,
  WiAlien
} from "weather-icons-react";

// console.log(Object.keys(wi));

const mapWeatherToProp = weather => {
  const [ampm, weath] = (weather.includes("night") && [
    "Night",
    weather.split("night")[0]
  ]) ||
    (weather.includes("day") && ["Day", weather.split("day")[0]]) || [
      false,
      false
    ];
  const weatherModifiers = ["i", "o", "p", "m"];
  // i think it means "intermediate", "overnight", "partly", "mostly".
  const translateModifier = idx =>
    ["intermediate", "overnight", "partly", "mostly"][idx];
  console.log(ampm);
  const modder =
    (weatherModifiers.includes(weath[0]) &&
      translateModifier(weatherModifiers.indexOf(weath[0]))) ||
    false;
  const wstate = (modder && weath.slice(1).toLowerCase()) || weath;
  return wstate;
};

const WeatherCondition = ({ data, init }) => {
  const weath = mapWeatherToProp(data.weather);
  const renderIcon = () => {
    switch (weath) {
      case "cloudy":
        return <WiCloudy title={"cloudy"} size={24} />;
      case "shower":
        return <WiShowers title={"showers"} size={24} />;
      case "clear":
        return <WiNightClear title={"clear"} size={24} />;
      case "ts":
        return <WiThunderstorm title={"thunderstorm"} size={24} />;
      default:
        return <WiAlien size={24} />;
    }
  };
  return (
    <WeatherCard>
      {renderIcon()}
      <p>({data.weather})</p>
      {moment(init, "YYYYMMDD")
        .add(Number(data.timepoint), "hour")
        .calendar()}{" "}
    </WeatherCard>
  );
};

export default WeatherCondition;
