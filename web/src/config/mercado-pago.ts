import axios from 'axios';
import Router from 'next/router';
import { CartProduct as CP } from '../model/cart-product';
import { getDefaultImage } from '../../lib/sanity';
import { PaymentRequest } from '../model/payment-request';

const confirmPurchase = async (cart: CP[]) => {
  const paymentDataRequest = {
    items: cart.map((item) => {
      const imageUrl = getDefaultImage(item.image).url();
      return {
        id: item._id,
        size: item.size,
        name: item.name,
        description: item.description,
        quantity: item.quantity,
        price: item.price,
        pictureUrl: imageUrl,
      };
    }),
  } as PaymentRequest;
  const result = await axios.post('/api/create-payment', paymentDataRequest);
  const url = result.data.replace(/https?:/, '');
  return Router.push(url);
};

const exportedFunctions = {
  confirmPurchase,
};

export default exportedFunctions;
