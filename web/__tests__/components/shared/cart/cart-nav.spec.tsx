import { shallow } from 'enzyme';
import React from 'react';
import 'jest-styled-components';
import CartNav from '../../../../src/components/shared/cart/cart-nav';

describe('CartNav component', () => {
  let mockfn = jest.fn();

  it('should render', () => {
    const wrapper = shallow(<CartNav clickHandler={mockfn} />);

    expect(wrapper.exists()).toBe(true);
  });

  it('should render the back-arrow image', () => {
    const wrapper = shallow(<CartNav clickHandler={mockfn} />);

    expect(wrapper.render().find('img').length).toBe(1);
  });
});
