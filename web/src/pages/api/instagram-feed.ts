import { NextApiRequest, NextApiResponse } from 'next';
import { fold } from 'fp-ts/lib/TaskEither';
import { replyError, replyOk } from '../../lamda-services/http-helpers';
import { getInstagramFeed } from '../../lamda-services/instagram.service';

export default async (req: NextApiRequest, res: NextApiResponse) => fold(replyError(res), replyOk<string[]>(res))(await getInstagramFeed())();
