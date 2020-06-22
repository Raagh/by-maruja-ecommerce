import { shallow } from 'enzyme';
import React from 'react';
import SliderSteppers from '../../../../src/components/shared/slider/slider-steppers';

describe('SliderSteppers component', () => {
  it('should render', () => {
    const wrapper = shallow(<SliderSteppers />);

    expect(wrapper.exists()).toBeTruthy();
  });
});
