import React from 'react';
import { shallow } from 'enzyme';

import ContactPage from '../../src/pages/contact';
import { mock as categoriesMock } from '../../__mocks__/categories-configuration.mock';

describe('Contact Page', () => {
  it('should render', () => {
    const wrapper = shallow(<ContactPage categories={categoriesMock} />);

    expect(wrapper.exists()).toBeTruthy();
  });
});