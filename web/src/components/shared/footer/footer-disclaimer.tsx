import React from 'react';
import styled from 'styled-components';

import Link from 'next/link';
import { CaptionSmall } from '../../../config/global-styled-components';
import { device } from '../../../config/device';
import { colors } from '../../../config/global-styles';

const DisclaimerContainer = styled.div`
  padding-top: 2.5rem;
  padding-bottom: 2rem;
  @media ${device.large} {
    display: flex;
    justify-content: space-between;
  }
`;

const FooterDisclaimerText = styled(CaptionSmall)`
  letter-spacing: 1px;
  margin-right: 5px;
  color: ${colors.ui.grey50percent};
`;

const LinkContainer = styled.a`
  display: block;
  text-decoration: none;
  display: none;
  @media ${device.large} {
    display: flex;
    justify-content: flex-end;
    margin-left: auto;
  }
`;

const LinksContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const FooterDisclaimerOnlyLarge = styled(FooterDisclaimerText)``;

const LinkPaddedContainer = styled.div`
  padding-left: 1rem;
`;

const FooterDisclaimer = () => {
  return (
    <DisclaimerContainer>
      <FooterDisclaimerText>© 2020 MARUJA. Todos los derechos reservados</FooterDisclaimerText>
      <LinksContainer>
        <Link href="/privacy" passHref>
          <LinkContainer>
            <FooterDisclaimerOnlyLarge>Políticas de privacidad</FooterDisclaimerOnlyLarge>
          </LinkContainer>
        </Link>
        <LinkPaddedContainer>
          <Link href="/conditions" passHref>
            <LinkContainer>
              <FooterDisclaimerOnlyLarge>Téminos y condiciones</FooterDisclaimerOnlyLarge>
            </LinkContainer>
          </Link>
        </LinkPaddedContainer>
      </LinksContainer>
    </DisclaimerContainer>
  );
};

export default FooterDisclaimer;
