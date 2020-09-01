import { shallow } from 'enzyme';
import React from 'react';

import FooterDesktopLinks from '../../../../src/components/shared/footer/footer-desktop-links';
import footerJson from '../../../../src/config/footer-conf.json';

describe('FooterDesktopLinks component', () => {
  it('should render', () => {
    const wrapper = shallow(<FooterDesktopLinks />);

    expect(wrapper.exists()).toBe(true);
  });

  it('should render a link home, an Instagram Link and one link for every object in the desktop section of footer-cong.json', () => {
    const wrapper = shallow(<FooterDesktopLinks />);
    const linkNumber = 2 + footerJson.data.desktop.length;

    expect(wrapper.render().find('a').length).toBe(linkNumber);
  });
});
