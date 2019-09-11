import { CHANGE_THEME_MODE } from "../actions/actionTypes";

const initialState = {
  newValue: false,
};

export const themeModeReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_THEME_MODE:
      return {
        ...state,
        newValue: action.newValue,
      };
    default:
      return state;
  }
};
