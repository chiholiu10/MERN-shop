export const types = {
  GET_TOKEN: "GET_TOKEN",
  ALL_PRODUCTS: "ALL_PRODUCTS",
  INCREMENT_QUANTITY: "INCREMENT_QUANTITY",
  DECREMENT_QUANTITY: "DECREMENT_QUANTITY",
  ADD_TO_CART: "ADD_TO_CART"
};

export const getToken = (token: string) => ({
  type: types.GET_TOKEN,
  token
});

export const allProducts = (products: any) => ({
  type: types.ALL_PRODUCTS,
  products
});

export const addToCart = (item: any, itemId: any) => ({
  type: types.ADD_TO_CART,
  item,
  itemId
});

export const decrementQuantity = (item: any, itemId: any) => ({
  type: types.DECREMENT_QUANTITY,
  item,
  itemId
});

export const incrementQuantity = (item: any, itemId: any) => ({
  type: types.INCREMENT_QUANTITY,
  item,
  itemId
});