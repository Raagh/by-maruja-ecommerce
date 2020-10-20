import React from 'react';
import { shallow } from 'enzyme';

import ContactSuccessPage from '../../src/pages/contact-success';
import { mock as categoriesMock } from '../../__mocks__/categories-configuration.mock';

describe('Contact-Success Page', () => {
  it('should render', () => {
    const wrapper = shallow(<ContactSuccessPage categories={categoriesMock} />);

    expect(wrapper.exists()).toBeTruthy();
  });
});