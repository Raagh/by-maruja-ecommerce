import { shallow, mount } from 'enzyme';
import React from 'react';
import Slider from '../../../../src/components/shared/slider/slider';
import SliderContent from '../../../../src/components/shared/slider/slider-content';
import SliderArrow from '../../../../src/components/shared/slider/slider-arrow';
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

  it('should render a single right arrow by default', () => {
    const wrapper = mount(<Slider recommended={recommendedMock} />);

    expect(wrapper.find(SliderArrow).length).toEqual(1);
    expect(wrapper.find(SliderArrow).props().direction).toEqual('right');
  });

  it('should change the translate values when the mouse is dragged', () => {
    const wrapper = mount(<Slider recommended={recommendedMock} />);
    const translateBeforeDrag = wrapper.find(SliderContent).props().values.translateValue;

    wrapper.find(SliderContent).simulate('mousedown');
    wrapper.find(SliderContent).simulate('mousemove', { clientX: 100 });
    wrapper.find(SliderContent).simulate('mousemove', { clientX: 101 });

    expect(typeof wrapper.find(SliderContent).props().values.translateValue).toEqual('number');
    expect(wrapper.find(SliderContent).props().values.translateValue).not.toEqual(NaN);
    expect(wrapper.find(SliderContent).props().values.translateValue).not.toEqual(translateBeforeDrag);
  });
});
