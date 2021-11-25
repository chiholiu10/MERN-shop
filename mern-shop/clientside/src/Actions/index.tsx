export const types = {
  GET_TOKEN: "GET_TOKEN",
  ALL_PRODUCTS: "ALL_PRODUCTS"
};

export const getToken = (token: string) => ({
  type: types.GET_TOKEN,
  token
});

export const allProducts = (products: any) => {
  return {
    type: types.ALL_PRODUCTS,
    products
  };
};