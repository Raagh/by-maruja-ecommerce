import { shallow, mount } from 'enzyme';
import React from 'react';
import 'jest-styled-components';
import SliderContent from '../../../../src/components/shared/slider/slider-content';

describe('SliderContent component', () => {
  const propValue = 100;

  it('should render', () => {
    const wrapper = shallow(<SliderContent transition={propValue} translateValue={propValue} width={propValue} />);

    expect(wrapper.exists()).toBeTruthy();
  });

  it('transform style should come from props', () => {
    const wrapper = mount(<SliderContent transition={propValue} translateValue={propValue} width={propValue} />);

    expect(wrapper.find('article')).toHaveStyleRule('transform', `translateX(${propValue}px)`);
  });

  it('transition style should come from props', () => {
    const wrapper = mount(<SliderContent transition={propValue} translateValue={propValue} width={propValue} />);

    expect(wrapper.find('article')).toHaveStyleRule('transition', `transform ease-out ${propValue}s`);
  });

  it('width style should come from props', () => {
    const wrapper = mount(<SliderContent transition={propValue} translateValue={propValue} width={propValue} />);

    expect(wrapper.find('article')).toHaveStyleRule('width', `${propValue}px`);
  });
});
