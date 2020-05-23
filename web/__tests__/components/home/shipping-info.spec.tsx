import { shallow } from 'enzyme';
import React from 'react';
import ShippingInfo from '../../../src/components/home/shipping-info';

describe('ShippingInfo component', () => {
  it('should render', () => {
    const wrapper = shallow(<ShippingInfo />);

    expect(wrapper.exists()).toBeTruthy();
  });

  it('should render an h4', () => {
    const wrapper = shallow(<ShippingInfo />);

    expect(wrapper.render().find('h4').length).toEqual(1);
  });

  it('should render 3 iconAndText components', () => {
    const wrapper = shallow(<ShippingInfo />);

    expect(wrapper.find('IconListItem').length).toEqual(3);
  });
});
