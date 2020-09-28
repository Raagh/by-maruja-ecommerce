import { shallow, mount } from 'enzyme';
import React from 'react';
import 'jest-styled-components';
import CartList from '../../../../../src/components/shared/cart/cart-product/cart-list';
import CartMock from '../../../../../__mocks__/cart-products.mock';
import SingleItem from '../../../../../src/components/shared/cart/cart-product/cart-single-item';
import PurchaseSummary from '../../../../../src/components/shared/cart/cart-product/cart-purchase-summary';

describe('CartList component', () => {
  it('should render', () => {
    const wrapper = shallow(<CartList cart={CartMock} />);

    expect(wrapper.exists()).toBe(true);
  });

  it('should not have display attribute in none when cart is not empty', () => {
    const wrapper = mount(<CartList cart={CartMock} />);

    expect(wrapper.find('div').first()).not.toHaveStyleRule('display', 'none');
  });

  it('should have display attribute in none when cart is empty', () => {
    const wrapper = mount(<CartList cart={[]} />);

    expect(wrapper.find('div').first()).toHaveStyleRule('display', 'none');
  });

  it('should render as many SingleItem components as products are in cart', () => {
    const wrapper = mount(<CartList cart={CartMock} />);

    expect(wrapper.find(SingleItem).length).toBe(CartMock.length);
  });

  it('should render Purchase Summary component', () => {
    const wrapper = mount(<CartList cart={CartMock} />);

    expect(wrapper.find(PurchaseSummary).length).toBe(1);
  });
});
