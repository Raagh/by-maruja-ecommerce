import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

import { LabelSmall } from '../../../config/global-styled-components';
import { typography } from '../../../config/global-styles';
import { device } from '../../../config/device';

const FooterMobileDesktopLinksContainer = styled.div<{ isFooter: boolean }>`
  ${(props) => (props.isFooter ? '' : 'display:flex; flex-flow:column; align-items: center;')}
  margin-bottom: 2rem;

  @media ${device.large} {
    display: flex;
    margin-left: 11rem;
    margin-bottom: 0;
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

const LargeOnlyLink = styled.a<{ isFooter: boolean }>`
  display: ${(props) => (props.isFooter ? 'none' : 'block')};
  ${(props) => (props.isFooter ? '' : 'margin-bottom: 1.5rem;')}
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

const FooterMobileDesktopLinks = ({ isFooter }: { isFooter: boolean }) => {
  return (
    <FooterMobileDesktopLinksContainer isFooter={isFooter}>
      <Link href="/" passHref>
        <LargeOnlyLink isFooter={isFooter}>
          <FooterLabel>SOBRE MARUJA</FooterLabel>
        </LargeOnlyLink>
      </Link>
      <Link href="/contact" passHref>
        <FooterLink>
          <FooterLabel>CONTACTO</FooterLabel>
        </FooterLink>
      </Link>
      <Link href="/faq" passHref>
        <FooterLink>
          <FooterLabel>PREGUNTAS FRECUENTES</FooterLabel>
        </FooterLink>
      </Link>

      <SmallOnlyLink href="/">
        <img src="/assets/Instagram.svg" alt="Instagram Logo" />
      </SmallOnlyLink>
    </FooterMobileDesktopLinksContainer>
  );
};

export default FooterMobileDesktopLinks;
