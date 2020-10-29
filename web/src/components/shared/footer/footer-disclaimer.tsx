import React from 'react';
import styled from 'styled-components';

import Link from 'next/link';
import { CaptionSmall } from '../../../config/global-styled-components';
import { device } from '../../../config/device';
import { colors } from '../../../config/global-styles';

const DisclaimerContainer = styled.div<{ shouldDisplayBelow: boolean }>`
  padding-top: 2.5rem;
  padding-bottom: 2rem;
  @media ${device.large} {
    display: flex;
    justify-content: space-between;
    ${(props) => (props.shouldDisplayBelow ? 'flex-direction: column' : '')}
  }
`;

const FooterDisclaimerText = styled(CaptionSmall)`
  letter-spacing: 1px;
  margin-right: 5px;
  color: ${colors.ui.grey50percent};
`;

const StyledLink = styled.a`
  color: ${colors.ui.grey50percent};
  :visited,
  :active {
    color: ${colors.ui.grey50percent};
  }
`;

const FooterDisclaimer = ({ shouldDisplayBelow }: { shouldDisplayBelow?: boolean }) => {
  return (
    <DisclaimerContainer shouldDisplayBelow={shouldDisplayBelow}>
      <FooterDisclaimerText>© 2020 MARUJA. Todos los derechos reservados</FooterDisclaimerText>
      <FooterDisclaimerText>
        <Link href="/conditions" passHref>
          <StyledLink> Términos y Condiciones de Uso</StyledLink>
        </Link>{' '}
        y{' '}
        <Link href="/privacy" passHref>
          <StyledLink> Políticas de Privacidad</StyledLink>
        </Link>
      </FooterDisclaimerText>

      <FooterDisclaimerText>Diseño - Thanh-Hông LÊ (Camille) y Sofia Toso</FooterDisclaimerText>
      <FooterDisclaimerText>Desarrollo - Manuel Aceituno y Patricio Ferraggi</FooterDisclaimerText>
    </DisclaimerContainer>
  );
};

export default FooterDisclaimer;
