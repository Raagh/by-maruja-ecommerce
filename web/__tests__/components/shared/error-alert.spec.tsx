import React from 'react';
import { shallow } from 'enzyme';

import ErrorAlert from '../../../src/components/shared/error-alert';

describe('ErrorAlert component', () => {
    let isVisible = true, title = "Title Test", subtitle="Subtitle Test";
  it('should render', () => {
    const wrapper = shallow(<ErrorAlert isVisible={isVisible} title={title} subtitle={subtitle} />);

    expect(wrapper.exists()).toBeTruthy();
  });
});