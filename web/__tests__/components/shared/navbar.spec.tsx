import { shallow, mount } from 'enzyme';
import React from 'react';
import NavBar from '../../../src/components/shared/navbar';
import Menu from '../../../src/components/shared/menu/menu';
import Cart from '../../../src/components/shared/cart/cart';
import { mock as categoriesMock } from '../../../__mocks__/categories-configuration.mock';

describe('NavBar component', () => {
  const wrapper = shallow(<NavBar categories={categoriesMock} />);
  it('should render', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('should render Menu component', () => {
    const wrapper = mount(<NavBar categories={categoriesMock} />);
    expect(wrapper.find(Menu).length).toEqual(1);
  });

  it('should render Cart component', () => {
    const wrapper = mount(<NavBar categories={categoriesMock} />);
    expect(wrapper.find(Cart).length).toEqual(1);
  });
});
