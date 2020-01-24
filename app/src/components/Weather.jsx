import React from "react";
import { connect } from "react-redux";
import {
  updateZipcode,
  dispatchGeometry,
  dispatchWeather,
  updateGeometry,
  updateWeather
} from "../actions";
import Forecast from "./Forecast";

const mapStateToProps = state => {
  return { ...state.weatherReducer };
};

const Weather = props => {
  const handleChange = e => {
    e.preventDefault();
    props.updateZipcode(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    props
      .dispatchGeometry(props.zipcode)
      .then(props.dispatchWeather(props.geometry));
  };

  return (
    <span>
      <h1>weather</h1>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="location"
          value={props.zipcode}
          onChange={handleChange}
        />
      </form>
      <Forecast />
    </span>
  );
};

export default connect(mapStateToProps, {
  updateZipcode,
  updateGeometry,
  dispatchGeometry,
  dispatchWeather,
  updateWeather
})(Weather);
