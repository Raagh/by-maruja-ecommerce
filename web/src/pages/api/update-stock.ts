import { NextApiRequest, NextApiResponse } from 'next';

import { ErrorMessages } from '../../config/error-messages';
import { updateSanityStock } from '../../lamda-services/stock-handling.service';

export default (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST')
    res.status(404).json({
      error: {
        code: 'not_found',
        message: ErrorMessages.EndpointMethodIncorrect,
      },
    });

  const paymentId = req.body?.data?.id as string;
  const paymentAction = req.body?.data?.action as string;
  if (!paymentId || paymentAction !== 'payment.updated') res.status(200).end();

  updateSanityStock(paymentId);

  res.status(200).end();
};
