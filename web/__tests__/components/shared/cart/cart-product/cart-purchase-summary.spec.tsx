import { shallow } from 'enzyme';
import React from 'react';
import CartMock from '../../../../../__mocks__/cart-products.mock';
import PurchaseSummary from '../../../../../src/components/shared/cart/cart-product/cart-purchase-summary';

describe('PurchaseSummary component', () => {
  it('should render', () => {
    const wrapper = shallow(<PurchaseSummary cart={CartMock} />);

    expect(wrapper.exists()).toBe(true);
  });

  it('should display the sum of the prices of the objects in the cart', () => {
    const wrapper = shallow(<PurchaseSummary cart={CartMock} />);

    expect(wrapper.text()).toContain('' + CartMock.reduce((accum, prod) => (accum += prod.price * prod.quantity), 0));
  });
});
