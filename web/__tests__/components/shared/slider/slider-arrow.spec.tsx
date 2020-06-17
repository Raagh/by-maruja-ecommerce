import { shallow } from 'enzyme';
import React from 'react';
import SliderArrow from '../../../../src/components/shared/slider/slider-arrow';

describe('SliderArrow component', () => {
  it('should render', () => {
    const wrapper = shallow(<SliderArrow />);

    expect(wrapper.exists()).toBeTruthy();
  });
});
