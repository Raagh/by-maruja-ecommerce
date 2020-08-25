import React from 'react';
import styled from 'styled-components';

import { LabelSmall } from '../../../config/global-styled-components';
import { typography } from '../../../config/global-styles';
import { device } from '../../../config/device';

const FooterMobileDesktopLinksContainer = styled.div`
  @media ${device.large} {
    display: flex;
    margin-left: 11rem;
  }
`;

const FooterLink = styled.a`
  display: block;
  margin-bottom: 1.5rem;
  text-decoration: none;
  @media ${device.large} {
    margin-right: 2rem;
  }
`;

const FooterLabel = styled(LabelSmall)`
  @media ${device.large} {
    display: block;
    margin-right: 2rem;
    font-size: ${typography.links.small.fontSize};
    line-height: ${typography.links.small.lineHeight};
    letter-spacing: ${typography.links.small.letterSpacing};
  }
`;

const LargeOnlyLink = styled.a`
  display: none;
  text-decoration: none;
  @media ${device.large} {
    display: block;
    margin-right: 2rem;
  }
`;

const SmallOnlyLink = styled.a`
  display: block;
  text-decoration: none;
  @media ${device.large} {
    display: none;
  }
`;

const FooterMobileDesktopLinks = () => {
  return (
    <FooterMobileDesktopLinksContainer>
      <LargeOnlyLink href="/">
        <FooterLabel>SOBRE MARUJA</FooterLabel>
      </LargeOnlyLink>
      <FooterLink href="/">
        <FooterLabel>CONTACTO</FooterLabel>
      </FooterLink>
      <FooterLink href="/">
        <FooterLabel>PREGUNTAS FRECUENTES</FooterLabel>
      </FooterLink>
      <SmallOnlyLink href="/">
        <img src="/assets/Instagram.svg" alt="Instagram Logo" />
      </SmallOnlyLink>
    </FooterMobileDesktopLinksContainer>
  );
};

export default FooterMobileDesktopLinks;
