const initialState = {
  zipcode: "",
  geometry: { lat: 0, lng: 0 },
  weather: []
};

export const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_ZIPCODE":
      return { ...state, zipcode: action.payload };
    case "UPDATE_GEOMETRY":
      return { ...state, geometry: action.payload };
    case "UPDATE_WEATHER":
      return { ...state, weather: action.payload };
    default:
      return { ...state };
  }
};
