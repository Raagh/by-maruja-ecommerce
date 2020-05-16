import { NextApiRequest, NextApiResponse } from 'next';
import createPaymentLink from '../../api/create-payment.service';
import { configureMercadoPagoSDK } from '../../api/mercadopago.service';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  configureMercadoPagoSDK();

  const result = await createPaymentLink(req.body);
  res.json(result);
};
