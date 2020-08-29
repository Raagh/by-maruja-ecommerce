import { shallow, mount } from 'enzyme';
import React from 'react';
import Footer from '../../../../src/components/shared/footer';
import FooterDesktopLinks from '../../../../src/components/shared/footer/footer-desktop-links';
import FooterPayment from '../../../../src/components/shared/footer/footer-payment';
import FooterMobileDesktopLinks from '../../../../src/components/shared/footer/footer-mobile-desktop-links';
import FooterDisclaimer from '../../../../src/components/shared/footer/footer-disclaimer';

describe('Footer component', () => {
  it('should render', () => {
    const wrapper = shallow(<Footer />);

    expect(wrapper.exists()).toBe(true);
  });

  it('should render FooterPayment Component', () => {
    const wrapper = mount(<Footer />);

    expect(wrapper.find(FooterPayment).length).toBe(1);
  });

  it('should render FooterDesktopLinks Component', () => {
    const wrapper = mount(<Footer />);

    expect(wrapper.find(FooterDesktopLinks).length).toBe(1);
  });

  it('should render FooterMobileDesktopLinks Component', () => {
    const wrapper = mount(<Footer />);

    expect(wrapper.find(FooterMobileDesktopLinks).length).toBe(1);
  });

  it('should render FooterDisclaimer Component', () => {
    const wrapper = mount(<Footer />);

    expect(wrapper.find(FooterDisclaimer).length).toBe(1);
  });
});
