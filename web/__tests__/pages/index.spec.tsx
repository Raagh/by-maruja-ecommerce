import React from 'react';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import { SanityImageSource as SanityImageSourceAsset } from '@sanity/asset-utils';
import { shallow, mount } from 'enzyme';

import { mocked } from 'ts-jest/utils';
import axios from 'axios';
import { act } from 'react-dom/test-utils';

import Home from '../../src/pages';
import Hero from '../../src/components/home/hero';
import ShippingInfo from '../../src/components/home/shipping-info';
import ProductCategories from '../../src/components/home/categories/product-categories';
import NavBar from '../../src/components/shared/navbar';
import Recommended from '../../src/components/home/recommended';
import UserReviews from '../../src/components/home/user-reviews';
import Faq from '../../src/components/shared/faq';
import Feed from '../../src/components/home/feed';
import About from '../../src/components/home/about';
import { mock as categoriesMock } from '../../__mocks__/categories-configuration.mock';
import { mock as userReview } from '../../__mocks__/user-reviews-configuration.mock';
import { HeroConfiguration } from '../../src/model/hero-configuration';

jest.mock('axios');

const mockSetState = jest.fn();
jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useState: (initial: any) => [initial, mockSetState],
}));

const feedMock = ['url1', 'url2'];

const hero: HeroConfiguration = {
  title: '',
  subtitle: '',
  image: null as SanityImageSource,
  buttonText: '',
  buttonURL: '',
  asset: null as SanityImageSourceAsset,
};

const recommended = [
  {
    name: 'ejemplo',
    price: 1,
    image: null as SanityImageSource,
    asset: null as SanityImageSourceAsset,
    stock: 1,
  },
];

describe('Home Page', () => {
  it('should render', () => {
    const wrapper = shallow(
      <Home hero={hero} categories={categoriesMock} recommended={recommended} userReviews={userReview} />
    );

    expect(wrapper.exists()).toBeTruthy();
  });

  it('should render all components', () => {
    const mockedGet = mocked(axios.get);
    mockedGet.mockResolvedValue(feedMock);

    let wrapper = {} as any;
    act(() => {
      wrapper = mount(
        <Home hero={hero} categories={categoriesMock} recommended={recommended} userReviews={userReview} />
      );
    });

    expect(wrapper.find(NavBar).exists()).toBeTruthy();
    expect(wrapper.find(Hero).exists()).toBeTruthy();
    expect(wrapper.find(ShippingInfo).exists()).toBeTruthy();
    expect(wrapper.find(ProductCategories).exists()).toBeTruthy();
    expect(wrapper.find(Recommended).exists()).toBeTruthy();
    expect(wrapper.find(UserReviews).exists()).toBeTruthy();
    expect(wrapper.find(Feed).exists()).toBeTruthy();
    expect(wrapper.find(Faq).exists()).toBeTruthy();
    expect(wrapper.find(About).exists()).toBeTruthy();
  });
});
