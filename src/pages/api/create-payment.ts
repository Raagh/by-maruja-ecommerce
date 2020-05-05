import { NextApiRequest, NextApiResponse } from 'next';
import createPaymentLink from '../../core/create-payment.service';
import { configureMercadoPagoSDK } from '../../core/mercadopago.service';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  configureMercadoPagoSDK();

  const result = await createPaymentLink(req.body);
  res.json(result);
};
