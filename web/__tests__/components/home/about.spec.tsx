import { shallow, mount } from 'enzyme';
import React from 'react';
import About from '../../../src/components/home/about';

describe('About component', () => {
  it('should render', () => {
    const wrapper = shallow(<About />);

    expect(wrapper.exists()).toBeTruthy();
  });

  it('should render 1 images', () => {
    const wrapper = mount(<About />);

    expect(wrapper.find('img').length).toEqual(1);
  });
});
