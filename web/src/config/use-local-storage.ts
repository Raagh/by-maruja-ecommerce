import { CartProduct } from '../model/cart-product';

export const addToCart = (product: CartProduct) => {
  let cartContent: CartProduct[] = JSON.parse(localStorage.getItem('cart'));
  const productIndex = findProductIndex(cartContent, product);

  if (productIndex !== null) {
    cartContent[productIndex].quantity += 1;
  } else {
    if (cartContent === null) cartContent = [];
    cartContent.push(product);
  }

  localStorage.setItem('cart', JSON.stringify(cartContent));
};

export const removeFromCart = (product: CartProduct) => {
  let cartContent: CartProduct[] = JSON.parse(localStorage.getItem('cart'));
  cartContent = cartContent
    ? cartContent.filter((cartProd) => {
        return cartProd._id !== product._id;
      })
    : [];

  localStorage.setItem('cart', JSON.stringify(cartContent));
};

export const emptyCart = () => localStorage.removeItem('cart');

export const getCart = () => JSON.parse(localStorage.getItem('cart'));

const findProductIndex = (cart: CartProduct[], product: CartProduct) => {
  if (cart === null) return null;
  return cart.reduce<number>((cartProductIndex, cartProduct, index) => {
    return cartProduct._id === product._id ? index : cartProductIndex;
  }, null);
};
