import React from 'react';
import styled from 'styled-components';

import { device } from '../../../config/device';
import { colors } from '../../../config/global-styles';

import FooterDesktopLinks from './footer-desktop-links';
import FooterMobileDesktopLinks from './footer-mobile-desktop-links';
import FooterDisclaimer from './footer-disclaimer';

const FooterContainer = styled.article`
  max-width: 1600px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 57px;
  text-align: center;
  @media ${device.large} {
    margin-top: 70px;
    padding-left: 9rem;
    padding-right: 9rem;
  }
`;

const FooterLine = styled.hr`
  display: none;
  border-bottom: none;
  border-top: 1px solid ${colors.ui.grey10percent};

  position: absolute;
  left: 0;

  width: 100vw;
  @media ${device.large} {
    display: block;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterLine />
      <FooterDesktopLinks />
      <FooterMobileDesktopLinks isFooter={true} />
      <FooterDisclaimer />
    </FooterContainer>
  );
};

export default Footer;
