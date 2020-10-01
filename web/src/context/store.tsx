import React, { createContext, useReducer } from 'react';
import { addToCart, clearFromCart, emptyCart, getCart, removeOneFromCart } from '../config/use-local-storage';
import { actionTypes } from '../model/action-types';

type initialState = any;
type reducerAction = { type: actionTypes; payload?: any };
const initialState: initialState = { cart: getCart() };

const store = createContext(initialState);
const { Provider } = store;

const StateProvider = ({ children }: { children: any }) => {
  const [state, dispatch] = useReducer((state: initialState, action: reducerAction) => {
    let newState;
    switch (action.type) {
      case actionTypes.Add:
        addToCart(action.payload);
        newState = {
          ...state,
          cart: getCart(),
        };
        return newState;
      case actionTypes.Clear:
        clearFromCart(action.payload);
        newState = {
          ...state,
          cart: getCart(),
        };
        return newState;
      case actionTypes.Empty:
        emptyCart();
        newState = {
          ...state,
          cart: getCart(),
        };
        return newState;
      case actionTypes.Remove:
        removeOneFromCart(action.payload);
        newState = {
          ...state,
          cart: getCart(),
        };
        return newState;
      default:
        throw new Error('Wrong Action Type');
    }
  }, initialState);

  return <Provider value={{ state, dispatch: dispatch }}>{children}</Provider>;
};

export { store, StateProvider };
