import { shallow, mount } from 'enzyme';
import React from 'react';
import SliderImage from '../../../../src/components/shared/slider/slider-image';
import { mock as recommendedMock } from '../../../../__mocks__/recommended-configuration.mock';

describe('SliderImage component', () => {
  const mockWidth = -240;

  it('should render', () => {
    const wrapper = shallow(<SliderImage remoteImage={recommendedMock[0]} width={mockWidth} />);

    expect(wrapper.exists()).toBeTruthy();
  });

  it('should contain a SlideLink', () => {
    const wrapper = mount(<SliderImage remoteImage={recommendedMock[0]} width={mockWidth} />);

    expect(wrapper.find('article').length).toEqual(1);
  });

  it('should contain an img', () => {
    const wrapper = mount(<SliderImage remoteImage={recommendedMock[0]} width={mockWidth} />);

    expect(wrapper.find('img').length).toEqual(1);
  });
});
