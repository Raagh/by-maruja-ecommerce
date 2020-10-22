import React from 'react';
import { shallow, mount } from 'enzyme';

import FormInput from '../../../src/components/shared/form-input';

describe('FormInput component', () => {
    let type = "text", name="test", value ="test-value", onChange= jest.fn();
  it('should render', () => {
    const wrapper = shallow(<FormInput type={type} name={name} value={value} onChange={onChange} />);

    expect(wrapper.exists()).toBeTruthy();
  });

  it('should render text area when type is textarea', () => {
    const wrapper = shallow(<FormInput type={'textarea'} name={name} value={value} onChange={onChange} />);

    expect(wrapper.render().find('textarea').length).toBe(1);
  });

  it('should render input when type is not textarea', () => {
    const wrapper = shallow(<FormInput type={type} name={name} value={value} onChange={onChange} />);

    expect(wrapper.render().find('input').length).toBe(1);
  });

  it('should render the name passed as props', () => {
    const wrapper = mount(<FormInput type={type} name={name} value={value} onChange={onChange} />);

    expect(wrapper.render().text()).toContain(name);
  });
});