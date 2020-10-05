import React from 'react';
import { shallow } from 'enzyme';

import TopicSelector from '../../../src/components/shared/topic-selector';

describe('TopicSelector component', () => {
  it('should render', () => {
    const wrapper = shallow(<TopicSelector />);

    expect(wrapper.exists()).toBeTruthy();
  });
});
