import React from 'react';
import { shallow } from 'enzyme';

import FormInput from '../../../src/components/shared/form-input';

describe('FormInput component', () => {
    let type = "number", name="test";
  it('should render', () => {
    const wrapper = shallow(<FormInput type={type} name={name} />);

    expect(wrapper.exists()).toBeTruthy();
  });
});