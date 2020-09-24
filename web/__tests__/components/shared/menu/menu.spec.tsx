import React from 'react';
import { shallow, mount } from 'enzyme';
import 'jest-styled-components';
import Menu from '../../../../src/components/shared/menu/menu';
import { mock as categoriesMock } from '../../../../__mocks__/categories-configuration.mock';

describe('Menu component', () => {
  let isOpen = true;
  it('should render', () => {
    const wrapper = shallow(<Menu isOpen={isOpen} categories={categoriesMock} />);
    expect(wrapper.exists()).toBeTruthy();
  });

  it('should render as many categories as categories are in the mock', () => {
    const wrapper = mount(<Menu isOpen={isOpen} categories={categoriesMock} />);
    expect(wrapper.find('h1').length).toBe(categoriesMock.length);
  });

  it('should have a width of 100 when isOpen is true', () => {
    const wrapper = mount(<Menu isOpen={isOpen} categories={categoriesMock} />);
    expect(wrapper.find('div').first()).toHaveStyleRule('width', '100%');
  });

  it('should have a width of 0 when isOpen is false', () => {
    isOpen = false;
    const wrapper = mount(<Menu isOpen={isOpen} categories={categoriesMock} />);
    expect(wrapper.find('div').first()).toHaveStyleRule('width', '0%');
  });
});
