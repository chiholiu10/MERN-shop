import { types } from "../Actions";

type InitalStateProps = {
  token: string;
  products: Array<string | boolean | number>;
};

const initialState: InitalStateProps = {
  token: "",
  products: []
};

export const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case types.ALL_PRODUCTS: {
      return {
        ...state,
        products: action.products
      };
    }

    default: {
      return state;
    }
  }
};

export default reducer;