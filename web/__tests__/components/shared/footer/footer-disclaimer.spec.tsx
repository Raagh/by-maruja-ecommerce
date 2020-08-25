import { shallow } from 'enzyme';
import React from 'react';

import FooterDisclaimer from '../../../../src/components/shared/footer/footer-disclaimer';

describe('FooterDisclaimer component', () => {
  it('should render', () => {
    const wrapper = shallow(<FooterDisclaimer />);

    expect(wrapper.exists()).toBe(true);
  });
});
