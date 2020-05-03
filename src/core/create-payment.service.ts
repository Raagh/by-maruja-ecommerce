import { MercadoPagoPaymentRequest } from 'mercadopago';
import { createPreference } from './mercadopago.service';

export default async function createPaymentLink(data: MercadoPagoPaymentRequest) {
  const result = await createPreference(data);

  return result ? result.response.init_point : null;
}
