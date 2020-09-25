import { shallow, mount } from 'enzyme';
import React from 'react';
import NavBar from '../../../src/components/shared/navbar';
import Menu from '../../../src/components/shared/menu/menu';
import { mock as categoriesMock } from '../../../__mocks__/categories-configuration.mock';

describe('NavBar component', () => {
  const wrapper = shallow(<NavBar categories={categoriesMock} />);
  it('should render', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('should display the menu, the logo(Once in the Menu and once in the Footer) and the bag', () => {
    expect(wrapper.render().find('img').length).toEqual(4);
  });

  it('should include the links to products, contact, about and the cart two times (Once in the Menu and once in the footer) and the logo', () => {
    expect(wrapper.render().find('a').length).toEqual(9);
  });

  it('should render Menu component', () => {
    const wrapper = mount(<NavBar categories={categoriesMock} />);
    expect(wrapper.find(Menu).length).toEqual(1);
  });
});
