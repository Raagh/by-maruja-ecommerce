import { shallow } from 'enzyme';
import React from 'react';
import ShippingInfo from '../../../src/components/home/shippingInfo';

describe('ShippingInfo component', () => {
  it('should render', () => {
    const wrapper = shallow(<ShippingInfo />);

    expect(wrapper.exists()).toBeTruthy();
  });
});
