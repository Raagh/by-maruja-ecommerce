import { shallow } from 'enzyme';
import React from 'react';
import CartButton from '../../../src/components/shared/cart-button';

describe('CartButton component', () => {
  const clickHandler = jest.fn();
  it('should render', () => {
    const wrapper = shallow(<CartButton clickHandler={clickHandler} />);

    expect(wrapper.exists()).toBe(true);
  });

  it('should include a link', () => {
    const wrapper = shallow(<CartButton clickHandler={clickHandler} />);

    expect(wrapper.render().find('a').length).toEqual(1);
  });
});
