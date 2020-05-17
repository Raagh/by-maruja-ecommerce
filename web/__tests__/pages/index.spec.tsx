import { shallow } from 'enzyme';
import React from 'react';
import Home from '../../src/pages';

describe('Home', () => {
  it('should render', () => {
    const wrapper = shallow(<Home />);

    expect(wrapper.exists()).toBe(true);
  });
});
