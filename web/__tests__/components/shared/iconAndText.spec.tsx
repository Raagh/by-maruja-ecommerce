import { shallow } from 'enzyme';
import React from 'react';
import IconAndText from '../../../src/components/shared/iconAndText';

describe('IconAndText component', () => {
  it('should render', () => {
    const wrapper = shallow(<IconAndText />);

    expect(wrapper.exists()).toBeTruthy();
  });
});
