export const FETCH_PRODUCTS_BEGIN = "FETCH_PRODUCTS_BEGIN";
export const FETCH_PRODUCTS_SUCCESS = "FETCH_PRODUCTS_SUCCESS";
export const FETCH_PRODUCTS_FAILURE = "FETCH_PRODUCTS_FAILURE";

const URL = "http://react2018-shop.s3-website-eu-west-1.amazonaws.com";

// ACTIONS

export const fetchProductsBegin = () => ({
  type: FETCH_PRODUCTS_BEGIN
});

export const fetchProductsSuccess = products => ({
  type: FETCH_PRODUCTS_SUCCESS,
  payload: { products }
});

export const fetchProductsFailure = error => ({
  type: FETCH_PRODUCTS_FAILURE,
  payload: { error }
});

// API REQUEST

export const fetchProducts = () => {
  return dispatch => {
    dispatch(fetchProductsBegin());

    return fetch(URL)
      .then(handleErrors)
      .then(res => res.json())
      .then(data => {
        dispatch(fetchProductsSuccess(data));
        return data;
      })
      .catch(error => dispatch(fetchProductsFailure(error)));
  };
};

// Handle HTTP errors since fetch won't.
function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}
