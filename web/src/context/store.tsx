import React, { createContext, useEffect, useReducer } from 'react';
import { addToCart, removeFromCart, emptyCart, getCart } from './use-local-storage';
import { ActionTypes } from '../model/action-types';

type initialState = any;
type reducerAction = { type: ActionTypes; payload?: any };
const initialState: initialState = {
  cart: [],
};

const store = createContext(initialState);
const { Provider } = store;

const cartReducer = (state: initialState, action: reducerAction) => {
  switch (action.type) {
    case ActionTypes.Add:
      addToCart(action.payload);
      break;
    case ActionTypes.Remove:
      removeFromCart(action.payload);
      break;
    case ActionTypes.Empty:
      emptyCart();
      break;
    case ActionTypes.KeepCartState:
      return {
        ...state,
        cart: getCart(),
      };
    default:
      throw new Error('Wrong Action Type');
  }

  return {
    ...state,
    cart: getCart(),
  };
};

const StateProvider = ({ children }: { children: any }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  useEffect(() => {
    dispatch({
      type: ActionTypes.KeepCartState,
    });
  }, []);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider };
