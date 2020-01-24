import React from "react";
import { connect } from "react-redux";
import WeatherCondition from "./WeatherCondition";

const mapStateToProps = state => {
  return {
    ...state.weatherReducer.weather
  };
};
const Forecast = props => {
  const { product, init, dataseries } = props;
  return (
    <ul>
      {dataseries &&
        dataseries.map((data, idx) => (
          <WeatherCondition
            key={idx}
            data={data}
            init={init}
            product={product}
          />
        ))}
    </ul>
  );
};

export default connect(mapStateToProps, {})(Forecast);
