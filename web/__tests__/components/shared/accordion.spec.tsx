import { shallow } from 'enzyme';
import React from 'react';
import Accordion from '../../../src/components/shared/accordion';

describe('Accordion component', () => {
  it('should render', () => {
    const wrapper = shallow(<Accordion />);

    expect(wrapper.exists()).toBeTruthy();
  });
});
