import React from 'react';
import styled from 'styled-components';

import { typography, colors } from '../../../config/global-styles';
import { LinksLarge } from '../../../config/global-styled-components';
import { device } from '../../../config/device';

import footerJson from '../../../config/footer-conf.json';

const FooterDesktopLinksContainer = styled.div`
  display: none;
  align-items: center;
  @media ${device.large} {
    display: flex;
  }
`;

const FooterLink = styled(LinksLarge)`
  display: block;
  text-decoration: none;
  @media ${device.large} {
    margin-right: 2rem;
  }
`;

const LogoLink = styled(FooterLink)`
  margin-top: 15px;
  margin-right: 2.75rem;
`;

const CornerLink = styled(FooterLink)`
  margin-left: auto;
  display: flex;
  align-items: center;
`;

const InstaLogoLarge = styled.img`
  height: 22px;
  width: 24px;
  margin-left: 1rem;
  padding-bottom: 2px;
`;

const CornerLinkText = styled.p`
  font-family: ${typography.links.large.font.name};
  font-style: normal;
  font-weight: ${typography.links.large.font.fontWeight};
  font-size: ${typography.links.large.fontSize};
  line-height: ${typography.links.large.lineHeight};
  letter-spacing: ${typography.links.large.letterSpacing};
  color: ${colors.ui.darkSurface};

  text-transform: ${typography.links.textTransform};
`;

const createLink = (legend: string, link: string, key: number) => {
  return (
    <FooterLink href={`/categories${link}`} key={key}>
      {legend}
    </FooterLink>
  );
};

const FooterDesktopLinks = () => {
  return (
    <FooterDesktopLinksContainer>
      <LogoLink href="/">
        <img src="/assets/Logo.svg" alt="Logo Maruja" />
      </LogoLink>

      {footerJson.data.desktop.map((link, index) => createLink(link.legend, link.link, index))}

      <CornerLink href="/">
        <CornerLinkText>SEGUÍNOS EN INSTAGRAM</CornerLinkText>
        <InstaLogoLarge src="/assets/Instagram.svg" alt="Instagram Logo" />
      </CornerLink>
    </FooterDesktopLinksContainer>
  );
};

export default FooterDesktopLinks;
