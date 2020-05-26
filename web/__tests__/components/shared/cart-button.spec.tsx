import { shallow } from 'enzyme';
import React from 'react';
import CartButton from '../../../src/components/shared/cart-button';

describe('CartButton component', () => {
  it('should render', () => {
    const wrapper = shallow(<CartButton />);

    expect(wrapper.exists()).toBe(true);
  });

  it('should display the bag', () => {
    const wrapper = shallow(<CartButton />);

    expect(wrapper.render().find('img').length).toEqual(1);
  });

  it('should include a link', () => {
    const wrapper = shallow(<CartButton />);

    expect(wrapper.render().find('a').length).toEqual(1);
  });
});
