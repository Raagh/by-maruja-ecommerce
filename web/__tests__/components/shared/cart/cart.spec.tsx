import { shallow, mount } from 'enzyme';
import React from 'react';
import 'jest-styled-components';
import Cart from '../../../../src/components/shared/cart/cart';
import CartEmpty from '../../../../src/components/shared/cart/cart-empty';
import CartList from '../../../../src/components/shared/cart/cart-list';

describe('Cart component', () => {
  it('should render', () => {
    const wrapper = shallow(<Cart />);

    expect(wrapper.exists()).toBe(true);
  });

  it('should render CartEmpty', () => {
    const wrapper = mount(<Cart />);

    expect(wrapper.find(CartEmpty).length).toEqual(1);
  });

  it('should render CartList', () => {
    const wrapper = mount(<Cart />);

    expect(wrapper.find(CartList).length).toEqual(1);
  });
});
