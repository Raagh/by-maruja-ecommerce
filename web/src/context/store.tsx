import React, { createContext, useReducer } from 'react';
import { addToCart, clearFromCart, emptyCart, getCart, removeOneFromCart } from '../config/use-local-storage';
import { actionTypes } from '../model/action-types';

type initialState = any;
type reducerAction = { type: actionTypes; payload?: any };
const initialState: initialState = {
  cart: [
    {
      _id: 'eec86419-9c39-4e02-93b0-dd83a978730c',
      image: {
        key: '1e1017634afe',
        type: 'image',
        asset: {
          _ref: 'image-70eef7174d55ae65f2e5ccc3f66829262cd79ff7-500x500-webp',
          _type: 'reference',
        },
      },
      asset: {
        metadata: {
          type: 'sanity.imageMetadata',
          dimensions: {
            type: 'sanity.imageDimensions',
            aspectRatio: 1,
            height: 500,
            width: 500,
          },
          hasAlpha: false,
          isOpaque: true,
          lqip:
            'data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAUABQDASIAAhEBAxEB/8QAGAABAAMBAAAAAAAAAAAAAAAAAAMFBgj/xAAkEAACAgICAgAHAAAAAAAAAAABAgADBBEFMQYSEyEiMkFRUv/EABYBAQEBAAAAAAAAAAAAAAAAAAQCBf/EAB0RAAIDAAIDAAAAAAAAAAAAAAABAgMRBBITIVH/2gAMAwEAAhEDEQA/AOnOVzk4/Ee5x7Efav8AR/UzlvkuXXVi5BoUUWto77El85x7L1w9My1qx2RKzKK8hyWLxdFLfDoCkWA7GvzMPncm3zOFcsazF9bF01x6pyRvEb2RWHRG4hR6qAOgNRNxBCHMqS7GdLVDLroyu4DjsbDrayivVlh+pj8yYiHlGLuTz3hab6tFxEREEH//2Q==',
        },
        url:
          'https://cdn.sanity.io/images/x7biewak/maruja-dataset/70eef7174d55ae65f2e5ccc3f66829262cd79ff7-500x500.webp',
      },
      name: 'Anillos Ejemplo',
      price: 300,
      quantity: 3,
    },
  ],
};

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
