import React from 'react';
import { shallow, mount } from 'enzyme';
import 'jest-styled-components';
import Menu from '../../../../src/components/shared/menu/menu';

describe('Menu component', () => {
  let isOpen = true;
  it('should render', () => {
    const wrapper = shallow(<Menu isOpen={isOpen} />);
    expect(wrapper.exists()).toBeTruthy();
  });

  it('should have a width of 100 when isOpen is true', () => {
    const wrapper = mount(<Menu isOpen={isOpen} />);
    expect(wrapper.find('div')).toHaveStyleRule('width', '100%');
  });

  it('should have a width of 0 when isOpen is false', () => {
    isOpen = false;
    const wrapper = mount(<Menu isOpen={isOpen} />);
    expect(wrapper.find('div')).toHaveStyleRule('width', '0%');
  });
});
