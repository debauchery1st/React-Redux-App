import React from "react";
import { connect } from "react-redux";
import { updateWeather } from "../actions";

const mapStateToProps = state => {
  return {
    ...state.weatherReducer.geometry,
    zipcode: state.weatherReducer.zipcode
  };
};

const Geometry = props => {
  return (
    <span>
      <h5>{props.zipcode}</h5>
      {props.zipcode !== "" ? (
        <p>
          {props.lat}, {props.lng}
        </p>
      ) : (
        ""
      )}
    </span>
  );
};

export default connect(mapStateToProps, {
  updateWeather
})(Geometry);
