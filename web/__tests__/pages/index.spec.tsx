import { shallow } from 'enzyme';
import React from 'react';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import Home from '../../src/pages';
import Hero from '../../src/components/home/hero';

const hero = {
  title: '',
  subtitle: '',
  image: null as SanityImageSource,
  buttonText: '',
  buttonURL: '',
};

describe('Home Page', () => {
  it('should render', () => {
    const wrapper = shallow(<Home hero={hero} />);

    expect(wrapper.exists()).toBe(true);
  });

  it('should render hero', () => {
    const wrapper = shallow(<Home hero={hero} />);

    expect(wrapper.find(Hero).exists()).toBe(true);
  });
});
