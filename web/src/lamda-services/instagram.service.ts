import { tryCatch, map } from 'fp-ts/lib/TaskEither';
import { IgApiClient, UserFeedResponseItemsItem } from 'instagram-private-api';
import { toError } from 'fp-ts/lib/Either';
import { pipe } from 'fp-ts/lib/pipeable';

const ig = new IgApiClient();

const mapFeedItemsToUrls = (feedItems: UserFeedResponseItemsItem[]) =>
  feedItems.flatMap((x) => x.image_versions2?.candidates.filter((y) => y.width === 360).map((y) => y.url)).filter((_, index) => index < 3);

export const getInstagramFeed = async () => {
  ig.state.generateDevice(process.env.instagramUser);
  await ig.simulate.preLoginFlow();
  const loggedInUser = await ig.account.login(process.env.instagramUser, process.env.instagramPassword);
  const userFeed = ig.feed.user(loggedInUser.pk);

  return pipe(map(mapFeedItemsToUrls)(tryCatch(() => userFeed.items(), toError)));
};
