const UPDATE_ZIPCODE = "UPDATE_ZIPCODE";
export const updateZipcode = zipcode => {
  return {
    type: UPDATE_ZIPCODE,
    payload: zipcode
  };
};
