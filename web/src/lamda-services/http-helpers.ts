import { NextApiResponse } from 'next';
import { of } from 'fp-ts/lib/Task';

export const replyError = (res: NextApiResponse) => (error: Error) => of(res.status(500).send(error));
export const replyOk = (res: NextApiResponse) => (token: string) => of(res.json(token));
