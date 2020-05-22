import { configure, MercadoPagoPaymentRequest, preferences } from 'mercadopago';

export function configureMercadoPagoSDK() {
  configure({
    sandbox: process.env.useMercadoPagoSandbox === 'true',
    access_token: process.env.mercadoPagoAccessToken,
  });
}

export const createPreference = async (data: MercadoPagoPaymentRequest) => preferences.create(data);
