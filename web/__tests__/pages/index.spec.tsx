import { shallow, mount } from 'enzyme';
import React from 'react';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import { SanityImageSource as SanityImageSourceAsset } from '@sanity/asset-utils';
import Home from '../../src/pages';
import Hero from '../../src/components/home/hero';
import { mock as categoriesMock } from '../../__mocks__/categories-configuration.mock';
import { mock as userReview } from '../../__mocks__/user-reviews-configuration.mock';
import ShippingInfo from '../../src/components/home/shipping-info';
import ProductCategories from '../../src/components/home/categories/product-categories';
import NavBar from '../../src/components/shared/navbar';
import Recommended from '../../src/components/home/recommended';
import { HeroConfiguration } from '../../src/model/hero-configuration';
import UserReviews from '../../src/components/home/user-reviews';
import Faq from '../../src/components/home/faq';

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
    const wrapper = shallow(<Home hero={hero} categories={categoriesMock} recommended={recommended} userReviews={userReview} />);

    expect(wrapper.exists()).toBeTruthy();
  });

  it('should render navbar', () => {
    const wrapper = mount(<Home hero={hero} categories={categoriesMock} recommended={recommended} userReviews={userReview} />);

    expect(wrapper.find(NavBar).exists()).toBeTruthy();
  });

  it('should render hero', () => {
    const wrapper = mount(<Home hero={hero} categories={categoriesMock} recommended={recommended} userReviews={userReview} />);

    expect(wrapper.find(Hero).exists()).toBeTruthy();
  });

  it('should render shipping information', () => {
    const wrapper = mount(<Home hero={hero} categories={categoriesMock} recommended={recommended} userReviews={userReview} />);

    expect(wrapper.find(ShippingInfo).exists()).toBeTruthy();
  });

  it('should render product categories', () => {
    const wrapper = mount(<Home hero={hero} categories={categoriesMock} recommended={recommended} userReviews={userReview} />);

    expect(wrapper.find(ProductCategories).exists()).toBeTruthy();
  });

  it('should render recommended component', () => {
    const wrapper = mount(<Home hero={hero} categories={categoriesMock} recommended={recommended} userReviews={userReview} />);

    expect(wrapper.find(Recommended).exists()).toBeTruthy();
  });

  it('should render user reviews', () => {
    const wrapper = mount(<Home hero={hero} categories={categoriesMock} recommended={recommended} userReviews={userReview} />);

    expect(wrapper.find(UserReviews).exists()).toBeTruthy();
  });

  it('should render faq', () => {
    const wrapper = mount(<Home hero={hero} categories={categoriesMock} recommended={recommended} userReviews={userReview} />);

    expect(wrapper.find(Faq).exists()).toBeTruthy();
  });
});
