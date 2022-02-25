import type { ItemsProps } from "../Types/Types";

export const types = {
  GET_TOKEN: "GET_TOKEN",
  ALL_PRODUCTS: "ALL_PRODUCTS",
  INCREMENT_QUANTITY: "INCREMENT_QUANTITY",
  DECREMENT_QUANTITY: "DECREMENT_QUANTITY",
  DELETE_FROM_CART: "DELETE_FROM_CART",
  ADD_TO_CART: "ADD_TO_CART",
  INCREMENT: "INCREMENT",
  DECREMENT: "DECREMENT"
};

export const getToken = (token: string) => {
  return {
    type: types.GET_TOKEN,
    token
  };
};

export const allProducts = (allProducts: ItemsProps[]) => ({
  type: types.ALL_PRODUCTS,
  allProducts
});

export const addToCart = (item: ItemsProps, itemId: number) => ({
  type: types.ADD_TO_CART,
  item,
  itemId,
});

export const decrement = (itemId: number) => ({
  type: types.DECREMENT,
  itemId
});

export const increment = (itemId: number) => ({
  type: types.INCREMENT,
  itemId
});

export const decrementQuantity = (itemId: number) => ({
  type: types.DECREMENT_QUANTITY,
  itemId
});

export const incrementQuantity = (itemId: number) => ({
  type: types.INCREMENT_QUANTITY,
  itemId
});

export const deleteFromCart = (itemId: number) => ({
  type: types.DELETE_FROM_CART,
  itemId
});