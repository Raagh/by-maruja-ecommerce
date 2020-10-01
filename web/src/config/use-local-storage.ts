import { CartProduct } from '../model/cart-product';

export const addToCart = (product: CartProduct) => {
  let cartContent: CartProduct[] = JSON.parse(localStorage.getItem('cart'));
  let productIndex = findProductIndex(cartContent, product);

  if (productIndex !== null) {
    cartContent[productIndex].quantity += 1;
  } else {
    if (cartContent === null) cartContent = [];
    cartContent.push(product);
  }

  localStorage.setItem('cart', JSON.stringify(cartContent));
};

export const clearFromCart = (product: CartProduct) => {
  let cartContent: CartProduct[] = JSON.parse(localStorage.getItem('cart'));
  cartContent = cartContent.filter((cartProd) => {
    return cartProd._id !== product._id;
  });

  localStorage.setItem('cart', JSON.stringify(cartContent));
};

export const emptyCart = () => {
  localStorage.removeItem('cart');
};

export const getCart = () => {
  //return JSON.parse(localStorage.getItem('cart'));
  return [
    {
      _id: 'eec86419-9c39-4e02-93b0-dd83a978730c',
      image: {
        key: '1e1017634afe',
        type: 'image',
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
      quantity: 1,
    },
    {
      _id: 'eec86419-9c39-4e02-93b0-dd83a978730c',
      image: {
        key: '1e1017634afe',
        type: 'image',
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
  ];
};

export const removeOneFromCart = (product: CartProduct) => {
  let cartContent: CartProduct[] = JSON.parse(localStorage.getItem('cart'));

  let productIndex = findProductIndex(cartContent, product);

  if (productIndex !== null) {
    cartContent[productIndex].quantity > 1
      ? (cartContent[productIndex].quantity -= 1) && localStorage.setItem('cart', JSON.stringify(cartContent))
      : clearFromCart(product);
  }
};

const findProductIndex = (cart: CartProduct[], product: CartProduct) => {
  if (cart === null) return null;
  return cart.reduce<number>((cartProductIndex, cartProduct, index) => {
    return cartProduct._id === product._id ? index : cartProductIndex;
  }, null);
};
