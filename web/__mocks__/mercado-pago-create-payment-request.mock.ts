import { MercadoPagoPaymentRequest } from 'mercadopago';

export const mock = {
  items: [
    {
      title: 'Dummy Item',
      description: 'Multicolor Item',
      quantity: 1,
      currency_id: 'ARS',
      unit_price: 10.0,
    },
  ],
  external_reference: '076997c7-a7ad-448f-bd8a-0124f5447e34',
  auto_return: 'approved',
} as MercadoPagoPaymentRequest;

// {
//   items: [item],
//   binary_mode: true,
//   purpose: "wallet_purchase",
//   notification_url: `${process.env.URL}/api/${id}/tier`,
//   back_urls: {
//     success: `${process.env.URL}/${slug}`,
//   },
//   auto_return: "approved",
//   external_reference: {
//     id,
//     plan,
//     slug,
//     tierUntil: getPlanExpirationDate(plan, tierUntil),
//   },
// }
