import { shallow, mount } from 'enzyme';
import { act } from 'react-dom/test-utils';
import React from 'react';
import Feed from '../../../src/components/home/feed';
import { mocked } from 'ts-jest/utils';
import axios from 'axios';

jest.mock('axios');

const mockSetState = jest.fn();
jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useState: (initial: any) => [initial, mockSetState],
}));

const feedMock = ['url1', 'url2'];

describe('Feed component', () => {
  beforeAll(() => jest.spyOn(React, 'useEffect').mockImplementationOnce(React.useLayoutEffect));
  afterAll(() => jest.spyOn(React, 'useEffect').mockRestore());

  it('should render', () => {
    const wrapper = shallow(<Feed />);

    expect(wrapper.exists()).toBeTruthy();
  });

  it('when component is created the api request should have the correct values', () => {
    const mockedGet = mocked(axios.get);
    mockedGet.mockResolvedValue(feedMock);

    act(() => {
      mount(<Feed />);
    });

    expect(axios.get).toBeCalledTimes(1);
    expect(axios.get).toBeCalledWith('/api/instagram-feed');
  });

  it('should render 3 images', () => {
    const mockedGet = mocked(axios.get);
    mockedGet.mockResolvedValue(feedMock);

    let wrapper: any = {};
    act(() => {
      wrapper = mount(<Feed />);
    });

    expect(wrapper.find('img').length).toEqual(3);
  });
});
