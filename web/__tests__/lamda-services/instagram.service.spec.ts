import { getInstagramFeed } from '../../src/lamda-services/instagram.service';
import { isRight, right } from 'fp-ts/lib/Either';

jest.mock('instagram-private-api');

test('Instagram api should return proper list of items', async () => {
  // Act
  process.env.instagramUser = 'fakeUser';
  process.env.instagramPassword = 'fakePassword';

  const result = await getInstagramFeed();
  const awaitedResult = await result();

  // Assert
  expect(result).toBeDefined();
  expect(isRight(awaitedResult)).toBeTruthy();
  expect(awaitedResult).toStrictEqual(right(['url1']));
});
