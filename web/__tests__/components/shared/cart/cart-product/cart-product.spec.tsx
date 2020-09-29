import { shallow, mount } from 'enzyme';
import React from 'react';
import CartProduct from '../../../../../src/components/shared/cart/cart/cart';
import CartEmpty from '../../../../../src/components/shared/cart/cart/cart-empty';
import CartList from '../../../../../src/components/shared/cart/cart/cart-list';
import Faq from '../../../../../src/components/shared/faq';

describe('CartProduct component', () => {
  let isOpen = false;
  it('should render', () => {
    const wrapper = shallow(<CartProduct isOpen={isOpen} />);

    expect(wrapper.exists()).toBe(true);
  });

  it('should render CartEmpty', () => {
    const wrapper = mount(<CartProduct isOpen={isOpen} />);

    expect(wrapper.find(CartEmpty).length).toEqual(1);
  });

  it('should render Faq', () => {
    const wrapper = mount(<CartProduct isOpen={isOpen} />);

    expect(wrapper.find(Faq).length).toEqual(1);
  });

  it('should render CartList', () => {
    const wrapper = mount(<CartProduct isOpen={isOpen} />);

    expect(wrapper.find(CartList).length).toEqual(1);
  });
});
