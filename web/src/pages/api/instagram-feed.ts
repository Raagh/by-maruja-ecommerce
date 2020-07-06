import { NextApiRequest, NextApiResponse } from 'next';
import { UserFeedResponseCandidatesItem } from 'instagram-private-api';
import { fold } from 'fp-ts/lib/TaskEither';
import { replyError, replyOk } from '../../lamda-services/http-helpers';
import { getInstagramFeed } from '../../lamda-services/instagram.service';

export default async (req: NextApiRequest, res: NextApiResponse) =>
  fold(replyError(res), replyOk<UserFeedResponseCandidatesItem[]>(res))(await getInstagramFeed())();
