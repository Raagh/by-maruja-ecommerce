import { shallow } from 'enzyme';
import React from 'react';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import Home from '../../src/pages';
import Hero from '../../src/components/home/hero';
import { mock as categoriesMock } from '../../__mocks__/categories-configuration.mock';
import ShippingInfo from '../../src/components/home/shipping-info';
import ProductCategories from '../../src/components/home/categories/product-categories';

const hero = {
  title: '',
  subtitle: '',
  image: null as SanityImageSource,
  buttonText: '',
  buttonURL: '',
};

describe('Home Page', () => {
  it('should render', () => {
    const wrapper = shallow(<Home hero={hero} categories={categoriesMock} />);

    expect(wrapper.exists()).toBe(true);
  });

  it('should render hero', () => {
    const wrapper = shallow(<Home hero={hero} categories={categoriesMock} />);

    expect(wrapper.find(Hero).exists()).toBe(true);
  });

  it('should render shipping information', () => {
    const wrapper = shallow(<Home hero={hero} categories={categoriesMock} />);

    expect(wrapper.find(ShippingInfo).exists()).toBe(true);
  });

  it('should render product categories', () => {
    const wrapper = shallow(<Home hero={hero} categories={categoriesMock} />);

    expect(wrapper.find(ProductCategories).exists()).toBe(true);
  });
});
