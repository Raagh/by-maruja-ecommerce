import React from 'react';
import { shallow } from 'enzyme';
import Menu from '../../../../src/components/shared/menu/menu';

describe('Menu component', () => {
  const isOpen = true;
  it('should render', () => {
    const wrapper = shallow(<Menu isOpen={isOpen} />);

    expect(wrapper.exists()).toBeTruthy();
  });
});
