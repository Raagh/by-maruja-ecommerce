import { CartProduct } from '../model/cart-product';

const STORAGE_KEY = 'cart';

const findProduct = (cart: CartProduct[], product: CartProduct) => cart?.find((x) => x._id === product._id);

export const addToCart = (product: CartProduct) => {
  const cartContent: CartProduct[] = JSON.parse(localStorage.getItem(STORAGE_KEY)) ?? [];

  const foundProduct = findProduct(cartContent, product);

  if (foundProduct) foundProduct.quantity += product.quantity;
  else cartContent.push(product);

  localStorage.setItem(STORAGE_KEY, JSON.stringify(cartContent));
};

export const removeFromCart = (product: CartProduct) => {
  let cartContent: CartProduct[] = JSON.parse(localStorage.getItem(STORAGE_KEY));
  cartContent = cartContent ? cartContent.filter((cartProd) => cartProd._id !== product._id) : [];

  localStorage.setItem(STORAGE_KEY, JSON.stringify(cartContent));
};

export const emptyCart = () => localStorage.removeItem(STORAGE_KEY);

export const getCart = () => JSON.parse(localStorage.getItem(STORAGE_KEY)) ?? [];
