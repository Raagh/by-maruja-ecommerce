import { shallow, mount } from 'enzyme';
import React from 'react';
import Recommended from '../../../src/components/home/recommended/recommended';
import RecommendedCarousel from '../../../src/components/home/recommended/recommended-carousel';
import { mock as recommendedMock } from '../../../__mocks__/recommended-configuration.mock';

describe('Recommended component', () => {
  it('should render', () => {
    const wrapper = shallow(<Recommended recommended={recommendedMock} />);

    expect(wrapper.exists()).toBeTruthy();
  });

  it('should render 1 title', () => {
    const wrapper = shallow(<Recommended recommended={recommendedMock} />);

    expect(wrapper.render().find('h2').length).toEqual(1);
  });

  it('should render slider', () => {
    const wrapper = mount(<Recommended recommended={recommendedMock} />);

    expect(wrapper.find(RecommendedCarousel).exists()).toBeTruthy();
  });
});
