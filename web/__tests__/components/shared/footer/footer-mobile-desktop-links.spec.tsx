import { shallow } from 'enzyme';
import React from 'react';
import FooterMobileDesktopLinks from '../../../../src/components/shared/footer/footer-mobile-desktop-links';

describe('FooterMobileDesktopLinks component', () => {
  it('should render', () => {
    const wrapper = shallow(<FooterMobileDesktopLinks isFooter={true} />);

    expect(wrapper.exists()).toBe(true);
  });

  it('should render links to about, contact, faq, and Instagram', () => {
    const wrapper = shallow(<FooterMobileDesktopLinks isFooter={true} />);

    expect(wrapper.render().find('a').length).toBe(4);
  });
});
