import { types } from "../Actions";

const initialState = {
  token: ""
};

export const reducer = (state = initialState, action: any) => {
  switch (action.types) {
    case types.GET_TOKEN: {
      return {
        ...state,
        token: action.token
      };
    }
    default: {
      return state;
    }
  }
};

export default reducer;