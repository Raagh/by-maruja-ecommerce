import CartProductsMock from '../../__mocks__/cart-products-mock';
import {
  addToCart,
  clearFromCart,
  emptyCart,
  getCart,
  removeOneFromCart,
} from '../../src/lamda-services/use-local-storage';

describe('AddToCart', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('should add object to cart and object does not exist', () => {
    addToCart(CartProductsMock[0]);

    expect(JSON.parse(localStorage.getItem('cart')).length).toBe(1);
    expect(JSON.parse(localStorage.getItem('cart'))[0].name).toBe('test 1');

    addToCart(CartProductsMock[1]);

    expect(JSON.parse(localStorage.getItem('cart')).length).toBe(2);
    expect(JSON.parse(localStorage.getItem('cart'))[1].name).toBe('test 2');
  });

  it('should add quantity to object in cart when using addToCart and object exists', () => {
    addToCart(CartProductsMock[0]);

    expect(JSON.parse(localStorage.getItem('cart')).length).toBe(1);
    expect(JSON.parse(localStorage.getItem('cart'))[0].quantity).toBe(1);

    addToCart(CartProductsMock[0]);
    expect(JSON.parse(localStorage.getItem('cart')).length).toBe(1);
    expect(JSON.parse(localStorage.getItem('cart'))[0].quantity).toBe(2);
  });
});

describe('clearFromCart', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('should clear an object from cart irregardless of quantity', () => {
    addToCart(CartProductsMock[1]);
    addToCart(CartProductsMock[0]);
    clearFromCart(CartProductsMock[1]);

    expect(JSON.parse(localStorage.getItem('cart')).length).toBe(1);
    expect(JSON.parse(localStorage.getItem('cart'))[0].name).toBe('test 1');
  });
});

describe('emptyCart', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('should empty the whole cart', () => {
    addToCart(CartProductsMock[1]);
    addToCart(CartProductsMock[0]);
    emptyCart();

    expect(JSON.parse(localStorage.getItem('cart'))).toBe(null);
  });
});

describe('getCart', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('should get the whole cart', () => {
    addToCart(CartProductsMock[1]);
    addToCart(CartProductsMock[0]);

    let cart = getCart();

    expect(cart.length).toBe(2);
    expect(cart[1].name).toBe('test 1');
  });
});

describe('removeOneFromCart', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('should remove the item if quantity is one', () => {
    addToCart(CartProductsMock[1]);
    addToCart(CartProductsMock[0]);

    expect(JSON.parse(localStorage.getItem('cart')).length).toBe(2);

    removeOneFromCart(CartProductsMock[0]);

    expect(JSON.parse(localStorage.getItem('cart')).length).toBe(1);
    expect(JSON.parse(localStorage.getItem('cart'))[0].name).toBe('test 2');
  });

  it('should decrease quantity by one if quantity is greater than one', () => {
    addToCart(CartProductsMock[1]);

    expect(JSON.parse(localStorage.getItem('cart'))[0].quantity).toBe(3);

    removeOneFromCart(CartProductsMock[1]);

    expect(JSON.parse(localStorage.getItem('cart'))[0].quantity).toBe(2);
  });
});
