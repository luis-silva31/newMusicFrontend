const initialState = [];

function productsReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_ALL_PRODUCTS":
      return action.payload;
    case "ADD_PRODUCT":
      return [...state, action.payload];
    default:
      return state
  }
}

export default productsReducer;