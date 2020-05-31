import { shallow, mount } from 'enzyme';
import React from 'react';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import Home from '../../src/pages';
import Hero from '../../src/components/home/hero';
import { mock as categoriesMock } from '../../__mocks__/categories-configuration.mock';
import ShippingInfo from '../../src/components/home/shipping-info';
import ProductCategories from '../../src/components/home/categories/product-categories';
import NavBar from '../../src/components/shared/navbar';

const hero = {
  title: '',
  subtitle: '',
  image: null as SanityImageSource,
  buttonText: '',
  buttonURL: '',
};

describe('Home Page', () => {
  it('should render', () => {
    const wrapper = shallow(<Home hero={hero} categories={categoriesMock} userAgent={{ isMobile: false }} />);

    expect(wrapper.exists()).toBeTruthy();
  });

  it('should render navbar', () => {
    const wrapper = mount(<Home hero={hero} categories={categoriesMock} userAgent={{ isMobile: false }} />);

    expect(wrapper.find(NavBar).exists()).toBeTruthy();
  });

  it('should render hero', () => {
    const wrapper = mount(<Home hero={hero} categories={categoriesMock} userAgent={{ isMobile: false }} />);

    expect(wrapper.find(Hero).exists()).toBeTruthy();
  });

  it('should render shipping information', () => {
    const wrapper = mount(<Home hero={hero} categories={categoriesMock} userAgent={{ isMobile: false }} />);

    expect(wrapper.find(ShippingInfo).exists()).toBeTruthy();
  });

  it('should render product categories', () => {
    const wrapper = mount(<Home hero={hero} categories={categoriesMock} userAgent={{ isMobile: false }} />);

    expect(wrapper.find(ProductCategories).exists()).toBeTruthy();
  });
});
