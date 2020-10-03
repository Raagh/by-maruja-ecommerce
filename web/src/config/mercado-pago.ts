import axios from 'axios';
import Router from 'next/router';
import { MercadoPagoPaymentRequest } from 'mercadopago';
import { CartProduct as CP } from '../model/cart-product';
import { ErrorMessages } from './error-messages';

export const confirmPurchase = async (cart: CP[]) => {
  const paymentDataRequest = {
    items: cart.map((item) => {
      return {
        title: item.name,
        description: item.name,
        quantity: item.quantity,
        currency_id: 'ARS',
        unit_price: item.price,
        picture_url: Object.values(item.asset)[1],
      };
    }),
  } as MercadoPagoPaymentRequest;
  const result = await axios.post('/api/create-payment', paymentDataRequest);
  const url = result.data.replace(/https?:/, '');
  return Router.push(url).catch(() => {
    throw new Error(ErrorMessages.purchase);
  });
};
