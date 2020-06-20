import { shallow, mount } from 'enzyme';
import React from 'react';
import SliderImage from '../../../../src/components/shared/slider/slider-image';
import { mock as recommendedMock } from '../../../../__mocks__/recommended-configuration.mock';
import NameAndPrice from '../../../../src/components/shared/name-and-price';

describe('SliderImage component', () => {
  const mockWidth = -240;

  it('should render', () => {
    const wrapper = shallow(<SliderImage remoteImage={recommendedMock[0]} width={mockWidth} />);

    expect(wrapper.exists()).toBeTruthy();
  });

  it('should contain an img', () => {
    const wrapper = mount(<SliderImage remoteImage={recommendedMock[0]} width={mockWidth} />);

    expect(wrapper.find('img').length).toEqual(1);
  });

  it('should render a NameAndPrice component', () => {
    const wrapper = mount(<SliderImage remoteImage={recommendedMock[0]} width={mockWidth} />);

    expect(wrapper.find(NameAndPrice).length).toEqual(1);
  });
});
