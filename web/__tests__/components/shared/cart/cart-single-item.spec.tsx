import { shallow } from 'enzyme';
import React from 'react';
import SingleItem from '../../../../src/components/shared/cart/cart-single-item';
import CartMock from '../../../../__mocks__/cart-products.mock';

describe('SingleItem component', () => {
  it('should render', () => {
    const wrapper = shallow(<SingleItem product={CartMock[0]} />);

    expect(wrapper.exists()).toBe(true);
  });

  it('should render an image of the product and the delete boton image', () => {
    const wrapper = shallow(<SingleItem product={CartMock[0]} />);

    expect(wrapper.render().find('img').length).toBe(2);
  });

  it('should render the price, name and quantity of the product', () => {
    const wrapper = shallow(<SingleItem product={CartMock[0]} />);

    expect(wrapper.text()).toContain(`${CartMock[0].name}`);
    expect(wrapper.text()).toContain(`${CartMock[0].price}`);
    expect(wrapper.text()).toContain(`${CartMock[0].quantity}`);
  });
});
