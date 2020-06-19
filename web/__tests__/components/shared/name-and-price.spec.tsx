import { shallow } from 'enzyme';
import React from 'react';
import NamePrice from '../../../src/components/shared/name-and-price';

describe('NamePrice component', () => {
  it('should render', () => {
    const wrapper = shallow(<NamePrice />);

    expect(wrapper.exists()).toBe(true);
  });
});
