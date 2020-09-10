import React from 'react';
import { shallow } from 'enzyme';
import Menu from '../../../../src/components/shared/menu/menu';

describe('Menu component', () => {
  it('should render', () => {
    const wrapper = shallow(<Menu />);

    expect(wrapper.exists()).toBeTruthy();
  });
});
