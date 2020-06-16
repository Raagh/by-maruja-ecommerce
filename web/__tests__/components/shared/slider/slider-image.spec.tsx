import { shallow, mount } from 'enzyme';
import React from 'react';
import SliderImage from '../../../../src/components/shared/slider/slider-image';

describe('Slider component', () => {
  const image = {
    image: '',
    alt: '',
    asset: '',
  };
  it('should render', () => {
    const wrapper = shallow(<SliderImage {...image} />);

    expect(wrapper.exists()).toBeTruthy();
  });

  it('should contain a link', () => {
    const wrapper = mount(<SliderImage {...image} />);
    console.log(wrapper.debug());

    expect(wrapper.find('a').length).toEqual(1);
  });

  it('should contain an img', () => {
    const wrapper = mount(<SliderImage {...image} />);

    expect(wrapper.find('img').length).toEqual(1);
  });
});
