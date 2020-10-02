import { shallow, mount } from 'enzyme';
import React from 'react';
import axios from 'axios';
import CartMock from '../../../../__mocks__/cart-products.mock';
import PurchaseSummary from '../../../../src/components/shared/cart/cart-purchase-summary';
import PrimaryButton from '../../../../src/components/shared/primary-button';

describe('PurchaseSummary component', () => {
  it('should render', () => {
    const wrapper = shallow(<PurchaseSummary cart={CartMock} />);

    expect(wrapper.exists()).toBe(true);
  });

  it('should display the sum of the prices of the objects in the cart', () => {
    const wrapper = shallow(<PurchaseSummary cart={CartMock} />);

    expect(wrapper.text()).toContain('' + CartMock.reduce((accum, prod) => (accum += prod.price), 0));
  });

  it('should call MercadoPago after the PrimaryButton is clicked', () => {
    const wrapper = mount(<PurchaseSummary cart={CartMock} />);
    const mock = jest.spyOn(axios, 'post');

    wrapper.find(PrimaryButton).first().simulate('click');

    expect(mock).toHaveBeenCalledTimes(1);
  });
});
