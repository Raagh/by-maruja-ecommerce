import { NextApiRequest, NextApiResponse } from 'next';

import { sendEmail } from '../../lamda-services/send-email.service';
import { ErrorMessages } from '../../config/error-messages';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST')
    return res.status(404).json({
      error: {
        code: 'not_found',
        message: ErrorMessages.EndpointMethodIncorrect,
      },
    });

  const { name, email, content } = req.body;
  const result = await sendEmail({ name, email, content });
  return res.status(200).send(result);
};
