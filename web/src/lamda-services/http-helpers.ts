import { NextApiResponse } from 'next';
import { of } from 'fp-ts/lib/Task';

export const replyError = (res: NextApiResponse) => (error: Error) => of(res.status(500).send(error));
export const replyOk = <T>(res: NextApiResponse) => (token: T) => of(res.json(token));
