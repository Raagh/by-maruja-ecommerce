import React from 'react';
import styled from 'styled-components';

import { CaptionSmall } from '../../../config/global-styled-components';
import { device } from '../../../config/device';
import { colors } from '../../../config/global-styles';

const DisclaimerContainer = styled.div`
  padding-top: 2.5rem;
  padding-bottom: 2rem;
  @media ${device.large} {
    display: flex;
  }
`;

const FooterDisclaimerText = styled(CaptionSmall)`
  letter-spacing: 1px;
  margin-right: 5px;
  color: ${colors.ui.grey50percent};
`;

const FooterDisclaimerOnlyLarge = styled(FooterDisclaimerText)`
  display: none;
  @media ${device.large} {
    display: inline;
    margin-left: auto;
  }
`;

const FooterDisclaimer = () => {
  return (
    <DisclaimerContainer>
      <FooterDisclaimerText>© 2020 MARUJA. Todos los derechos reservados</FooterDisclaimerText>
      <FooterDisclaimerText>Web por</FooterDisclaimerText>
      <FooterDisclaimerOnlyLarge>Téminos y condiciones</FooterDisclaimerOnlyLarge>
    </DisclaimerContainer>
  );
};

export default FooterDisclaimer;
