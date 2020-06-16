import { shallow, mount } from 'enzyme';
import React from 'react';
import Slider from '../../../../src/components/shared/slider/slider';
import SliderContent from '../../../../src/components/shared/slider/slider-content';

describe('Slider component', () => {
  it('should render', () => {
    const wrapper = shallow(<Slider />);

    expect(wrapper.exists()).toBeTruthy();
  });

  it('should render SliderContent', () => {
    const wrapper = mount(<Slider />);

    expect(wrapper.find(SliderContent).exists()).toBeTruthy();
  });
});
