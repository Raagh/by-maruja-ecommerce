import mercadopago from 'mercadopago';

export default async function createPayment(data: any) {
  const result = await mercadopago.preferences.create(data);

  return result ? result.response.init_point : null;
}
