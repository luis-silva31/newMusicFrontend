export const addAllProductsAction = (products) => ({
  type: "ADD_ALL_PRODUCTS",
  payload: products,
});

export const addProductAction = (product) => ({
  type: "ADD_PRODUCT",
  payload: product,
});
