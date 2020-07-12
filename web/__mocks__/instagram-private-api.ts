const items = [
  {
    image_versions2: {
      candidates: [
        {
          width: 360,
          height: 360,
          url: 'url1',
        },
        {
          width: 1080,
          height: 360,
          url: 'url1',
        },
      ],
    },
  },
];
const IgApiClient = jest.fn(() => ({
  state: { generateDevice: jest.fn() },
  simulate: { preLoginFlow: jest.fn() },
  account: { login: jest.fn().mockResolvedValue({ pk: jest.fn() }) },
  feed: { user: jest.fn().mockReturnValue({ items: jest.fn().mockResolvedValue(items) }) },
}));

export { IgApiClient };
