import mercadopago, { MercadoPagoPaymentRequest } from 'mercadopago';

export default function configureMercadoPagoSDK() {
  mercadopago.configure({
    sandbox: true,
    access_token: 'TEST-7136722070390133-050117-a2efac96031b2994b4f6a2da97e77383-478787616',
  });
}

export const createPreference = async (data: MercadoPagoPaymentRequest) => await mercadopago.preferences.create(data);
