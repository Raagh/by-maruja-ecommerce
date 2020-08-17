import React from 'react';
import styled from 'styled-components';

import { device } from '../../../config/device';

import FooterPayment from './footer-payment';
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

const Footer = () => {
  return (
    <FooterContainer>
      <FooterPayment />
      <FooterDesktopLinks />
      <FooterMobileDesktopLinks />
      <FooterDisclaimer />
    </FooterContainer>
  );
};

export default Footer;
