import { shallow, mount } from 'enzyme';
import React from 'react';
import 'jest-styled-components';
import SliderArrow from '../../../../src/components/shared/slider/slider-arrow';

describe('SliderArrow component', () => {
  it('should render', () => {
    const wrapper = shallow(<SliderArrow direction="right" />);

    expect(wrapper.exists()).toBeTruthy();
  });

  it('should have style:right only when direction is right', () => {
    const wrapper = mount(<SliderArrow direction="right" />);

    expect(wrapper.find('img')).toHaveStyleRule('right', expect.any(String));
    expect(wrapper.find('img')).not.toHaveStyleRule('left', expect.any(String));
  });

  it('should have style:left only when direction is left', () => {
    const wrapper = mount(<SliderArrow direction="left" />);

    expect(wrapper.find('img')).toHaveStyleRule('left', expect.any(String));
    expect(wrapper.find('img')).not.toHaveStyleRule('right', expect.any(String));
  });

  it('should be flipped when direction is left', () => {
    const wrapper = mount(<SliderArrow direction="left" />);

    expect(wrapper.find('img')).toHaveStyleRule('transform', 'scaleX(-1)');
  });
});
