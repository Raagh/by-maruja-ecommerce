import { mount, shallow } from 'enzyme';
import React from 'react';
import Carousel from 'react-multi-carousel';
import ProductItemCarousel from '../../../src/components/product-item/product-item-carousel';

import { mock as product } from '../../../__mocks__/product.mock';

describe('ProductItemCarousel component', () => {
  it('should render', () => {
    const wrapper = shallow(<ProductItemCarousel product={product} />);

    expect(wrapper.exists()).toBe(true);
  });

  it('should render all main components component', () => {
    const wrapper = mount(<ProductItemCarousel product={product} />);

    expect(wrapper.find(Carousel).length).toBe(1);
    expect(wrapper.find('div').length).toBe(1);
  });
});
