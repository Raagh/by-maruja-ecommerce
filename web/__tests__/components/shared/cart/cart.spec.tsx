import { shallow, mount } from 'enzyme';
import React from 'react';
import 'jest-styled-components';
import Cart from '../../../../src/components/shared/cart/cart';
import CartNav from '../../../../src/components/shared/cart/cart-nav';

describe('Cart component', () => {
  let isOpen = true;
  let mockfn = jest.fn();
  it('should render', () => {
    const wrapper = shallow(<Cart isOpen={isOpen} clickHandler={mockfn} />);

    expect(wrapper.exists()).toBe(true);
  });

  it('should render the component CartNav', () => {
    const wrapper = mount(<Cart isOpen={isOpen} clickHandler={mockfn} />);

    expect(wrapper.find(CartNav).length).toBe(1);
  });

  it('should have a right attribute of 0 when isOpen is true', () => {
    const wrapper = mount(<Cart isOpen={isOpen} clickHandler={mockfn} />);
    expect(wrapper.find('div').first()).toHaveStyleRule('right', '0');
  });

  it('should have a right attribute of 100% when isOpen is false', () => {
    isOpen = false;
    const wrapper = mount(<Cart isOpen={isOpen} clickHandler={mockfn} />);
    expect(wrapper.find('div').first()).toHaveStyleRule('right', '-100%');
  });
});
