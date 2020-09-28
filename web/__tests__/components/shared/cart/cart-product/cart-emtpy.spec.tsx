import { shallow, mount } from 'enzyme';
import React from 'react';
import 'jest-styled-components';
import CartEmpty from '../../../../../src/components/shared/cart/cart-product/cart-empty';
import CartMock from '../../../../../__mocks__/cart-products-mock';

describe('CartEmpty component', () => {
  it('should render', () => {
    const wrapper = shallow(<CartEmpty cart={CartMock} />);

    expect(wrapper.exists()).toBe(true);
  });

  it('should have display attribute in none when cart is not empty', () => {
    const wrapper = mount(<CartEmpty cart={CartMock} />);

    expect(wrapper.find('div').first()).toHaveStyleRule('display', 'none');
  });

  it('should not have display attribute in none when cart is empty', () => {
    const wrapper = mount(<CartEmpty cart={[]} />);

    expect(wrapper.find('div').first()).not.toHaveStyleRule('display', 'none');
  });
});
