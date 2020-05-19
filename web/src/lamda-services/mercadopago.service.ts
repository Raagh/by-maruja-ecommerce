import { configure, MercadoPagoPaymentRequest, preferences } from 'mercadopago';

export function configureMercadoPagoSDK() {
  configure({
    sandbox: true,
    access_token: process.env.accessToken,
  });
}

export const createPreference = async (data: MercadoPagoPaymentRequest) => preferences.create(data);
