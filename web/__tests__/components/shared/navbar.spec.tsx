import { shallow, mount } from 'enzyme';
import React from 'react';
import NavBar from '../../../src/components/shared/navbar';
import Menu from '../../../src/components/shared/menu/menu';

describe('NavBar component', () => {
  const wrapper = shallow(<NavBar />);
  it('should render', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('should display the menu, the logo and the bag', () => {
    expect(wrapper.render().find('img').length).toEqual(3);
  });

  it('should include the links to products, contact, about and the cart', () => {
    expect(wrapper.render().find('a').length).toEqual(4);
  });

  it('should render Menu component', () => {
    const wrapper = mount(<NavBar />);
    expect(wrapper.find(Menu).length).toEqual(1);
  });
});
