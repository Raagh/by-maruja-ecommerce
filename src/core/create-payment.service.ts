import { MercadoPagoPaymentRequest } from 'mercadopago';
import { createPreference } from './mercadopago.service';

export default async function createPaymentLink(data: MercadoPagoPaymentRequest) {
  const result = await createPreference(data);

  return result ? (process.env.useMercadoPagoSandbox === 'true' ? result.response.sandbox_init_point : result.response.init_point) : null;
}
