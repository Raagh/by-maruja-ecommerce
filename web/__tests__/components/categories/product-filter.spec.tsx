import { shallow, mount } from 'enzyme';
import React from 'react';
import ProductFilter from '../../../src/components/categories/product-filter';

describe('ProductFilter component', () => {
  it('should render', () => {
    const wrapper = shallow(<ProductFilter filterProducts={() => {}} orderProducts={() => {}} />);

    expect(wrapper.exists()).toBe(true);
  });

  it('should display the 2 dropdowns', () => {
    const wrapper = shallow(<ProductFilter filterProducts={() => {}} orderProducts={() => {}} />);

    expect(wrapper.render().find('img').length).toEqual(2);
  });

  it('should display the 6 filters', () => {
    const wrapper = shallow(<ProductFilter filterProducts={() => {}} orderProducts={() => {}} />);

    expect(wrapper.render().find('p').length).toEqual(6);
  });

  it('when filter dropdown is clicked should trigger event', () => {
    const filterFunction = jest.fn();
    const orderFunction = jest.fn();
    const wrapper = mount(<ProductFilter filterProducts={filterFunction} orderProducts={orderFunction} />);

    wrapper.find('p').last().simulate('click');

    expect(filterFunction).toBeCalledTimes(1);
  });

  it('when order dropdown is clicked should trigger event', () => {
    const filterFunction = jest.fn();
    const orderFunction = jest.fn();
    const wrapper = mount(<ProductFilter filterProducts={filterFunction} orderProducts={orderFunction} />);

    wrapper.find('p').first().simulate('click');

    expect(orderFunction).toBeCalledTimes(1);
  });
});
