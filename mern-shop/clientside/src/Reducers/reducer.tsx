import { types } from "../Actions";

type InitalStateProps = {
  token: string;
  products: any;
  cart: any;
  quantity: any;
};

const initialState: InitalStateProps = {
  token: "",
  products: [],
  cart: [],
  quantity: 0
};

export const reducer = (state = initialState, action: any) => {
  const shoppingCart: any = [...state.cart];
  switch (action.type) {
    case types.ALL_PRODUCTS: {
      const fetchProduct = action.products;
      const newData = fetchProduct.map((item: any) => {
        return {
          ...item,
          quantity: 1
        };
      });
      return {
        ...state,
        products: newData
      };
    }

    case types.ADD_TO_CART: {
      const checkDuplicate = shoppingCart.findIndex((item: any) => item.id === action.itemId);

      if (checkDuplicate >= 0) {
        const newQuantity = shoppingCart[checkDuplicate].quantity += 1;
        shoppingCart[checkDuplicate] = {
          ...action.item,
          quantity: newQuantity
        };
      } else {
        shoppingCart.push({
          ...action.item
        });
      }
      return {
        ...state,
        cart: shoppingCart
      };
    }
    case types.INCREMENT_QUANTITY: {
      const checkItem = shoppingCart.map((item: any) => item.id === action.itemId);
      const checkProduct = shoppingCart.findIndex((item: any) => item.id === action.itemId);

      if (checkItem) {
        const newQuantity = shoppingCart[checkProduct].quantity += 1;
        shoppingCart[checkProduct] = {
          ...action.item,
          quantity: newQuantity
        };
      }
      return {
        ...state,
        cart: shoppingCart
      };
    }

    case types.DECREMENT_QUANTITY: {
      const checkItem = shoppingCart.map((item: any) => item.id === action.itemId);
      const checkProduct = shoppingCart.findIndex((item: any) => item.id === action.itemId);

      if (checkItem) {
        const newQuantity = shoppingCart[checkProduct].quantity === 0 ? 0 : shoppingCart[checkProduct].quantity - 1;
        shoppingCart[checkProduct] = {
          ...action.item,
          quantity: newQuantity
        };
      }

      return {
        ...state,
        cart: shoppingCart
      };
    }

    default: {
      return state;
    }
  }
};

export default reducer;