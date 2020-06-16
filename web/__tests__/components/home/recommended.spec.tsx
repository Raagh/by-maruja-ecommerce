import { shallow, mount } from 'enzyme';
import React from 'react';
import Recommended from '../../../src/components/home/recommended';
import Slider from '../../../src/components/shared/slider/slider';

describe('Recommended component', () => {
  it('should render', () => {
    const wrapper = shallow(<Recommended />);

    expect(wrapper.exists()).toBeTruthy();
  });

  it('should render 1 title', () => {
    const wrapper = shallow(<Recommended />);

    expect(wrapper.render().find('h2').length).toEqual(1);
  });

  it('should render slider', () => {
    const wrapper = mount(<Recommended />);

    expect(wrapper.find(Slider).exists()).toBeTruthy();
  });
});
