import { ADD_PRODUCT, ActionTypes } from "../actions";
import { State, initialState } from "../initialState";


export function cartReducer(state = initialState, action: ActionTypes): State {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...state,
        productsCart: [...state.productsCart, action.payload],
        totalItems: state.totalItems + 1,
      };
    default:
      return state;
  }
}
