import { shallow, mount } from 'enzyme';
import React from 'react';
import 'jest-styled-components';
import SliderContent from '../../../../src/components/shared/slider/slider-content';
import SliderImage from '../../../../src/components/shared/slider/slider-image';
import { mock as recommendedMock } from '../../../../__mocks__/recommended-configuration.mock';
import { mock as stylesMock } from '../../../../__mocks__/styles-configuration.mock';

describe('SliderContent component', () => {
  it('should render', () => {
    const wrapper = shallow(<SliderContent values={stylesMock} images={recommendedMock} />);

    expect(wrapper.exists()).toBeTruthy();
  });

  it('transform style should come from props', () => {
    const wrapper = mount(<SliderContent values={stylesMock} images={recommendedMock} />);

    expect(wrapper.find('article').first()).toHaveStyleRule('transform', `translateX(${-stylesMock.translateValue}px)`);
  });

  it('should render as many SliderImages as images are in the recommended props array', () => {
    const wrapper = mount(<SliderContent values={stylesMock} images={recommendedMock} />);

    expect(wrapper.find(SliderImage).length).toEqual(recommendedMock.length);
  });
});
