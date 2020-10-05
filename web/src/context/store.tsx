import React, { createContext, useEffect, useReducer } from 'react';
import { addToCart, clearFromCart, emptyCart, getCart, removeOneFromCart } from '../config/use-local-storage';
import { ActionTypes } from '../model/action-types';

type initialState = any;
type reducerAction = { type: ActionTypes; payload?: any };
const initialState: initialState = {
  cart: [],
};

const store = createContext(initialState);
const { Provider } = store;

const cartReducer = (state: initialState, action: reducerAction) => {
  let newState;
  switch (action.type) {
    case ActionTypes.Add:
      addToCart(action.payload);
      newState = {
        ...state,
        cart: getCart(),
      };
      return newState;
    case ActionTypes.Clear:
      clearFromCart(action.payload);
      newState = {
        ...state,
        cart: getCart(),
      };
      return newState;
    case ActionTypes.Empty:
      emptyCart();
      newState = {
        ...state,
        cart: getCart(),
      };
      return newState;
    case ActionTypes.Remove:
      removeOneFromCart(action.payload);
      newState = {
        ...state,
        cart: getCart(),
      };
      return newState;
    case ActionTypes.KeepCartState:
      newState = {
        ...state,
        cart: getCart(),
      };
      return newState;
    default:
      throw new Error('Wrong Action Type');
  }
};

const StateProvider = ({ children }: { children: any }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  useEffect(() => {
    dispatch({
      type: ActionTypes.KeepCartState,
      payload: JSON.parse(localStorage.getItem('cart')) || [],
    });
  }, []);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider };
