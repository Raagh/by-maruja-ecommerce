import { shallow, mount } from 'enzyme';
import React from 'react';
import Slider from '../../../../src/components/shared/slider/slider';
import SliderContent from '../../../../src/components/shared/slider/slider-content';
import { mock as recommendedMock } from '../../../../__mocks__/recommended-configuration.mock';

describe('Slider component', () => {
  it('should render', () => {
    const wrapper = shallow(<Slider recommended={recommendedMock} />);

    expect(wrapper.exists()).toBeTruthy();
  });

  it('should render SliderContent', () => {
    const wrapper = mount(<Slider recommended={recommendedMock} />);

    expect(wrapper.find(SliderContent).exists()).toBeTruthy();
  });
});
