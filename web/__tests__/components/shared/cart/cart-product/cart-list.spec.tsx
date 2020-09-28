import { shallow } from 'enzyme';
import React from 'react';
import CartList from '../../../../../src/components/shared/cart/cart-product/cart-list';

describe('CartList component', () => {
  it('should render', () => {
    const wrapper = shallow(<CartList />);

    expect(wrapper.exists()).toBe(true);
  });
});
