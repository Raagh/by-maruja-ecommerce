import React from 'react';
import { shallow, mount } from 'enzyme';

import ErrorAlert from '../../../src/components/shared/error-alert';

describe('ErrorAlert component', () => {
    let isVisible = true, title = "Title Test", subtitle="Subtitle Test";
  it('should render', () => {
    const wrapper = shallow(<ErrorAlert isVisible={isVisible} title={title} subtitle={subtitle} />);

    expect(wrapper.exists()).toBeTruthy();
  });

  it('should render text that is passed in props', () => {
    const wrapper = mount(<ErrorAlert isVisible={isVisible} title={title} subtitle={subtitle} />);

    expect(wrapper.render().text()).toContain(title);
    expect(wrapper.render().text()).toContain(subtitle);
  })
});