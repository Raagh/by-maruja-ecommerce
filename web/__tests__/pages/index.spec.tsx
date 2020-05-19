import { shallow } from 'enzyme';
import React from 'react';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import Home from '../../src/pages';

const hero = {
  title: '',
  subtitle: '',
  image: null as SanityImageSource,
};

describe('Home', () => {
  it('should render', () => {
    const wrapper = shallow(<Home hero={hero} />);

    expect(wrapper.exists()).toBe(true);
  });
});
