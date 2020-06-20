import { shallow } from 'enzyme';
import React from 'react';
import NameAndPrice from '../../../src/components/shared/name-and-price';

describe('NamePrice component', () => {
  const product = { name: 'Aros cualquiera', price: 100 };
  it('should render', () => {
    const wrapper = shallow(<NameAndPrice name={product.name} price={product.price} />);

    expect(wrapper.exists()).toBe(true);
  });

  it('should render its name prop as content', () => {
    const wrapper = shallow(<NameAndPrice name={product.name} price={product.price} />);

    expect(wrapper.text()).toContain(product.name);
  });

  it('should render its price prop as content', () => {
    const wrapper = shallow(<NameAndPrice name={product.name} price={product.price} />);

    expect(wrapper.text()).toContain(`${product.price}$`);
  });
});
