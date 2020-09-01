import { shallow } from 'enzyme';
import React from 'react';
import FooterPayment from '../../../../src/components/shared/footer/footer-payment';

describe('FooterPayment component', () => {
  it('should render', () => {
    const wrapper = shallow(<FooterPayment />);

    expect(wrapper.exists()).toBe(true);
  });
});
