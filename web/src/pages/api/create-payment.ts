import { NextApiRequest, NextApiResponse } from 'next';
import createPaymentLink from '../../lamda-services/create-payment.service';
import { configureMercadoPagoSDK } from '../../lamda-services/mercadopago.service';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  configureMercadoPagoSDK();

  const result = await createPaymentLink(req.body);
  res.json(result);
};
