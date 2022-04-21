import { combineReducers } from "redux";
import { Actions } from "./count-actions";

const initialState = {
  count: 8,
};

const CountReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
    case Actions.DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      return state;
  }
};

export const Reducers = combineReducers({
  count: CountReducer,
});
