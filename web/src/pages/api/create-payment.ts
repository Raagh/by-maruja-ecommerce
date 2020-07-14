import { NextApiRequest, NextApiResponse } from 'next';
import { fold } from 'fp-ts/lib/TaskEither';

import { createPaymentLink } from '../../lamda-services/create-payment.service';
import { configureMercadoPagoSDK } from '../../lamda-services/mercadopago.service';
import { replyError, replyOk } from '../../lamda-services/http-helpers';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  configureMercadoPagoSDK();

  await fold(replyError(res), replyOk<string>(res))(createPaymentLink(req.body))();
};
