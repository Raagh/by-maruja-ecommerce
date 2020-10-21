import { MercadoPagoPaymentRequest } from 'mercadopago';

export const mock = {
  items: [
    {
      title: 'Dummy Item',
      description: 'Multicolor Item',
      quantity: 1,
      unit_price: 10.0,
    },
  ],
} as MercadoPagoPaymentRequest;
