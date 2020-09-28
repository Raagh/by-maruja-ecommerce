import { shallow } from 'enzyme';
import React from 'react';
import SingleItem from '../../../../../src/components/shared/cart/cart-product/cart-single-item';
import CartMock from '../../../../../__mocks__/cart-products-mock';

describe('SingleItem component', () => {
  it('should render', () => {
    const wrapper = shallow(<SingleItem product={CartMock[0]} />);

    expect(wrapper.exists()).toBe(true);
  });
});
