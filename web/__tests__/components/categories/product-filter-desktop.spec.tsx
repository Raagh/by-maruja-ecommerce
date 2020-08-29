import { shallow, mount } from 'enzyme';
import React from 'react';
import ProductFilterDesktop from '../../../src/components/categories/product-filter-desktop';

describe('ProductFilterDesktop component', () => {
  it('should render', () => {
    const wrapper = shallow(<ProductFilterDesktop filterProducts={() => {}} orderProducts={() => {}} />);

    expect(wrapper.exists()).toBe(true);
  });

  it('should display the 1 dropdowns', () => {
    const wrapper = shallow(<ProductFilterDesktop filterProducts={() => {}} orderProducts={() => {}} />);

    expect(wrapper.render().find('img').length).toEqual(1);
  });

  it('should display the 2 filters', () => {
    const wrapper = shallow(<ProductFilterDesktop filterProducts={() => {}} orderProducts={() => {}} />);

    expect(wrapper.render().find('p').length).toEqual(2);
  });

  it('when order dropdown is clicked should trigger event', () => {
    const filterFunction = jest.fn();
    const orderFunction = jest.fn();
    const wrapper = mount(<ProductFilterDesktop filterProducts={filterFunction} orderProducts={orderFunction} />);

    wrapper.find('p').first().simulate('click');

    expect(orderFunction).toBeCalledTimes(1);
  });
});
