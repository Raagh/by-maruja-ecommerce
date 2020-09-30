import React, { createContext, useReducer } from 'react';
import { addToCart, clearFromCart, emptyCart, getCart, removeOneFromCart } from '../lamda-services/use-local-storage';

type initialState = any;

const initialState: initialState = { cart: [{}, {}] };

const store = createContext(initialState);
const { Provider } = store;

const StateProvider = ({ children }: { children: any }) => {
  const [state, dispatch] = useReducer((state: initialState, action: any) => {
    let newState;
    switch (action.type) {
      case 'ADD_TO_CART':
        addToCart(action.payload);
        newState = {
          ...state,
          cart: getCart(),
        };
        return newState;
      case 'CLEAR_FROM_CART':
        clearFromCart(action.payload);
        newState = {
          ...state,
          cart: getCart(),
        };
        return newState;
      case 'EMPTY_CART':
        emptyCart();
        newState = {
          ...state,
          cart: getCart(),
        };
        return newState;
      case 'REMOVE_ONE_FROM_CART':
        removeOneFromCart(action.payload);
        newState = {
          ...state,
          cart: getCart(),
        };
        return newState;
      default:
        throw new Error();
    }
  }, initialState);

  return <Provider value={{ state, dispatch: dispatch }}>{children}</Provider>;
};

export { store, StateProvider };
