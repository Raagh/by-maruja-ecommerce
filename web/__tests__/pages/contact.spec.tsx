import React from 'react';
import { shallow, mount } from 'enzyme';

import ContactPage from '../../src/pages/contact';
import FormInput from '../../src/components/shared/form-input';
import Faq from '../../src/components/shared/faq';
import ErrorAlert from '../../src/components/shared/error-alert';
import { mock as categoriesMock } from '../../__mocks__/categories-configuration.mock';

describe('Contact Page', () => {
  it('should render', () => {
    const wrapper = shallow(<ContactPage categories={categoriesMock} />);

    expect(wrapper.exists()).toBeTruthy();
  });

  it('should render three FormInput Components (Name, Email and Contact)', () => {
    const wrapper = mount(<ContactPage categories={categoriesMock} />);

    expect(wrapper.find(FormInput).length).toBe(3);
  });

  it('should render two Faq components(One for the NavBar)', () => {
    const wrapper = mount(<ContactPage categories={categoriesMock} />);

    expect(wrapper.find(Faq).length).toBe(2);
  });

  it('should render ErrorAlert component', () => {
    const wrapper = mount(<ContactPage categories={categoriesMock} />);

    expect(wrapper.find(ErrorAlert).length).toBe(1);
  });
});