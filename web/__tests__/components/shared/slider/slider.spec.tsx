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

  it('should correctly change the translate values when the mouse is dragged', () => {
    const wrapper = mount(<Slider recommended={recommendedMock} />);
    const translateBeforeDrag = wrapper.find(SliderContent).props().values.translateValue;

    wrapper.find(SliderContent).simulate('mousedown');
    wrapper.find(SliderContent).simulate('mousemove', { clientX: 100 });
    wrapper.find(SliderContent).simulate('mousemove', { clientX: 99 });

    expect(typeof wrapper.find(SliderContent).props().values.translateValue).toEqual('number');
    expect(wrapper.find(SliderContent).props().values.translateValue).not.toEqual(NaN);
    expect(wrapper.find(SliderContent).props().values.translateValue).not.toEqual(translateBeforeDrag);
  });

  it('should correctly change the translate values when dragged with a touchscreen', () => {
    const wrapper = mount(<Slider recommended={recommendedMock} />);
    const translateBeforeDrag = wrapper.find(SliderContent).props().values.translateValue;

    wrapper.find(SliderContent).simulate('touchstart');
    wrapper.find(SliderContent).simulate('touchmove', { touches: [{ clientX: 100 }] });
    wrapper.find(SliderContent).simulate('touchmove', { touches: [{ clientX: 99 }] });

    expect(typeof wrapper.find(SliderContent).props().values.translateValue).toEqual('number');
    expect(wrapper.find(SliderContent).props().values.translateValue).not.toEqual(NaN);
    expect(wrapper.find(SliderContent).props().values.translateValue).not.toEqual(translateBeforeDrag);
  });

  it('should limit the transform property when dragged beyond left boundry of Slider', () => {
    const wrapper = mount(<Slider recommended={recommendedMock} />);

    wrapper.find(SliderContent).simulate('touchstart');
    wrapper.find(SliderContent).simulate('touchmove', { touches: [{ clientX: 100 }] });
    wrapper.find(SliderContent).simulate('touchmove', { touches: [{ clientX: 200 }] });

    expect(wrapper.find(SliderContent).props().values.translateValue).toEqual(0);
  });

  it('should limit the transform property when dragged beyond right boundry of Slider', () => {
    const wrapper = mount(<Slider recommended={recommendedMock} />);
    const translateBeforeDrag = wrapper.find(SliderContent).props().values.translateValue;
    const clientXStart = 99999;

    wrapper.find(SliderContent).simulate('touchstart');
    wrapper.find(SliderContent).simulate('touchmove', { touches: [{ clientX: clientXStart }] });
    wrapper.find(SliderContent).simulate('touchmove', { touches: [{ clientX: 0 }] });

    expect(typeof wrapper.find(SliderContent).props().values.translateValue).toEqual('number');
    expect(wrapper.find(SliderContent).props().values.translateValue).not.toEqual(NaN);
    expect(wrapper.find(SliderContent).props().values.translateValue).not.toEqual(translateBeforeDrag);
    expect(wrapper.find(SliderContent).props().values.translateValue).not.toEqual(-clientXStart);
  });

  it('should render a single right arrow by default', () => {
    const wrapper = mount(<Slider recommended={recommendedMock} />);

    expect(wrapper.find(SliderArrow).length).toEqual(1);
    expect(wrapper.find(SliderArrow).props().direction).toEqual('right');
  });

  it('should render a single left arrow if mouse is dragged to the other end of the Slider', () => {
    const wrapper = mount(<Slider recommended={recommendedMock} />);
    const widthValue = wrapper.find(SliderContent).props().values.width;

    wrapper.find(SliderContent).simulate('mousedown');
    wrapper.find(SliderContent).simulate('mousemove', { clientX: 0 });
    wrapper.find(SliderContent).simulate('mousemove', { clientX: -widthValue * (recommendedMock.length * 2) });

    expect(wrapper.find(SliderArrow).length).toEqual(1);
    expect(wrapper.find(SliderArrow).props().direction).toEqual('left');
  });
});
