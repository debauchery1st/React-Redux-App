import React from "react";
import { connect } from "react-redux";
import {
  updateZipcode,
  dispatchGeometry,
  updateGeometry,
  updateWeather
} from "../actions";

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
    props.dispatchGeometry(props.zipcode);
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
    </span>
  );
};

export default connect(mapStateToProps, {
  updateZipcode,
  updateGeometry,
  dispatchGeometry,
  updateWeather
})(Weather);
