import { NextApiRequest, NextApiResponse } from 'next';
import { fold, tryCatch } from 'fp-ts/lib/TaskEither';
import { IgApiClient, UserFeedResponseItemsItem } from 'instagram-private-api';
import { toError } from 'fp-ts/lib/Either';
import { replyError, replyOk } from '../../lamda-services/http-helpers';
// import { InstagramFeed } from '../../lamda-services/instagram.service';

const ig = new IgApiClient();

const getInstagramFeed = async () => {
  ig.state.generateDevice('bymaruja');
  await ig.simulate.preLoginFlow();
  const loggedInUser = await ig.account.login('bymaruja', 'Clublomas21');
  const userFeed = ig.feed.user(loggedInUser.pk);
  return tryCatch(() => userFeed.items(), toError);
};

export default async (req: NextApiRequest, res: NextApiResponse) =>
  fold(replyError(res), replyOk<UserFeedResponseItemsItem[]>(res))(await getInstagramFeed())();
