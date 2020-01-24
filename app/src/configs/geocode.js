import axios from "axios";

const getGeometry = postcode =>
  axios
    .get(`https://debloggery.com/api/loc/${postcode}`)
    .then(result => console.log(result.data))
    .catch(err => console.log(err));

export { getGeometry };
