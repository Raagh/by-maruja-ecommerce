import { shallow } from 'enzyme';
import React from 'react';
import 'jest-styled-components';
import Cart from '../../../../src/components/shared/cart/cart';

describe('Cart component', () => {
  let isOpen = true;
  it('should render', () => {
    const wrapper = shallow(<Cart isOpen={isOpen} />);

    expect(wrapper.exists()).toBe(true);
  });
});
