import { configure, MercadoPagoPaymentRequest, preferences } from 'mercadopago';

export default function configureMercadoPagoSDK() {
  configure({
    sandbox: true,
    access_token: process.env.accessToken,
  });
}

export const createPreference = async (data: MercadoPagoPaymentRequest) => await preferences.create(data);
