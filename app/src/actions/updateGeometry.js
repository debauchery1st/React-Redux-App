import axios from "axios";

const UPDATE_GEOMETRY = "UPDATE_GEOMETRY";
const UPDATE_GEOMETRY_FAILED = "UPDATE_GEOMETRY_FAILED";

export const updateGeometry = geometry => {
  return {
    type: UPDATE_GEOMETRY,
    payload: geometry
  };
};

export const dispatchGeometry = postcode => dispatch => {
  return axios
    .get(`https://debloggery.com/api/loc/${postcode}`)
    .then(result => {
      dispatch({
        type: UPDATE_GEOMETRY,
        payload: result.data
      });
    })
    .catch(error => {
      dispatch({
        type: UPDATE_GEOMETRY_FAILED,
        payload: error.data
      });
    });
};
