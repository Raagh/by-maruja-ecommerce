import { shallow } from 'enzyme';
import React from 'react';
import Faq from '../../../src/components/home/faq';

describe('Faq component', () => {
  it('should render', () => {
    const wrapper = shallow(<Faq />);

    expect(wrapper.exists()).toBeTruthy();
  });
});
