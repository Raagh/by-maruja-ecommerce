import React from 'react';
import styled from 'styled-components';
import { device } from '../../../config/device';
import { colors } from '../../../config/global-styles';
import { BodyCopyBoldLarge } from '../../../config/global-styled-components';

const SidebarNavContainer = styled.section`
  min-width: 100vw;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: 2.5rem 1.5rem 0 1.5rem;

  background-color: ${colors.ui.whiteBackground};
  @media ${device.large} {
    padding: 2.5rem 2.5rem 0 2.5rem;
    max-width: 480px;
    min-width: 480px;
  }
`;

const BackButton = styled.div`
  z-index: 10;
  background-image: url('/assets/Arrow-Back.svg');
  background-repeat: no-repeat;
  background-size: cover;
  width: 16px;
  height: 16px;
  @media ${device.large} {
    background-image: url('/assets/Menu-Close.svg');
  }
  :hover {
    cursor: pointer;
  }
`;

const InvDiv = styled.div`
  width: 24px;
`;

const SidebarNav = ({ clickHandler, sidebarTitle }: { clickHandler: () => void; sidebarTitle: string }) => {
  return (
    <SidebarNavContainer>
      <BackButton onClick={clickHandler} />
      <BodyCopyBoldLarge>{sidebarTitle}</BodyCopyBoldLarge>
      <InvDiv />
    </SidebarNavContainer>
  );
};

export default SidebarNav;
