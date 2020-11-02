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
  let openCart = false;
  switch (action.type) {
    case ActionTypes.Add:
      addToCart(action.payload);
      openCart = true;
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
    case ActionTypes.CartOpened:
      openCart = false;
      break;
    default:
      throw new Error('Wrong Action Type');
  }

  return {
    ...state,
    openCart,
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
