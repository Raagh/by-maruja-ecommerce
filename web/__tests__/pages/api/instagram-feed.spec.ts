import { createRequest, createResponse } from 'node-mocks-http';
import { mocked } from 'ts-jest/utils';
import { right } from 'fp-ts/lib/TaskEither';
import { getInstagramFeed } from '../../../src/lamda-services/instagram.service';
import getFeed from '../../../src/pages/api/instagram-feed';

jest.mock('../../../src/lamda-services/instagram.service');

test('getInstagramFeed api should return 200 when passed correct data', async () => {
  // Arrange
  const request = createRequest({
    method: 'GET',
    url: '/instagram-feed',
  });
  mocked(getInstagramFeed).mockResolvedValue(right(['url1']));
  const response = createResponse();

  // Act
  await getFeed(request, response);

  // Assert
  expect(response.statusCode).toEqual(200);
});

test('getInstagramFeed api should return the url when passed correct data', async () => {
  // Arrange
  const request = createRequest({
    method: 'GET',
    url: '/instagram-feed',
  });
  mocked(getInstagramFeed).mockResolvedValue(right(['url1']));
  const response = createResponse();

  // Act
  await getFeed(request, response);

  // Assert
  expect(response._getJSONData()).toEqual(['url1']);
});
