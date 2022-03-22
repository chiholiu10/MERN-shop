import { useDispatch } from "react-redux";
import { deleteFromCart, types } from "../Actions";
import type { ItemsProps } from "../Types/Types";

type InitalStateProps = {
  products: any;
  cart: any;
};

const initialState: InitalStateProps = {
  products: [],
  cart: [],
};

export const reducer = (state = initialState, action: any) => {
  const shoppingCart = [...state.cart];
  const currentProductList = action.allProducts;
  switch (action.type) {
    case types.ALL_PRODUCTS: {
      return {
        ...state,
        products: currentProductList.map((item: any) => Object.assign(item, { quantity: 1 }))
      };
    }

    case types.ADD_TO_CART: {
      const checkDuplicate = shoppingCart.findIndex((item: ItemsProps) => item.id === action.itemId);

      if (checkDuplicate >= 0) {
        const { quantity } = state.products.find((item: ItemsProps) => item.id === action.itemId);
        return {
          ...state,
          cart: state.cart.map((item: ItemsProps) => item.id === action.itemId ? {
            ...item,
            quantity: item.quantity + quantity
          } : item)
        };
      } else {
        shoppingCart.push(action.item);
      }

      return {
        ...state,
        cart: shoppingCart
      };
    }

    case types.INCREMENT: {
      return {
        ...state,
        products: state.products.map((item: ItemsProps) => item.id === action.itemId ? {
          ...item,
          quantity: item.quantity + 1
        } : item
        )
      };
    }

    case types.DECREMENT: {
      return {
        ...state,
        products: state.products.map((item: ItemsProps) => item.id === action.itemId ? {
          ...item,
          quantity: item.quantity === 0 ? item.quantity : item.quantity - 1
        } : item
        )
      };
    }

    case types.INCREMENT_QUANTITY: {
      return {
        ...state,
        cart: state.cart.map((item: ItemsProps) => item.id === action.itemId ? {
          ...item,
          quantity: item.quantity + 1
        } : {
          ...item
        })
      };
    }

    case types.DECREMENT_QUANTITY: {

      return {
        ...state,
        cart: state.cart.map((item: ItemsProps) => item.id === action.itemId ? {
          ...item,
          quantity: item.quantity - 1
        } : {
          ...item
        })
      };
    }

    case types.DELETE_FROM_CART: {
      return {
        ...state,
        cart: state.cart.filter((item: any) => item.id !== action.itemId)
      };
    }

    default: {
      return state;
    }
  }
};

export default reducer;