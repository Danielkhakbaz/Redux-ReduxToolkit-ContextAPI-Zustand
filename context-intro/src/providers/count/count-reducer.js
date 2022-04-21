import { Actions } from "./count-action";

export const CountReducer = (state, action) => {
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
