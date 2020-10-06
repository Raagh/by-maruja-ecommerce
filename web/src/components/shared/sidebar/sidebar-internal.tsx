import React from 'react';
import styled from 'styled-components';
import { device } from '../../../config/device';
import { colors } from '../../../config/global-styles';
import SidebarNav from './sidebar-nav';

const SidebarContainer = styled.div<{ isOpen: boolean }>`
  height: 100vh;
  width: 100vw;
  position: fixed;
  z-index: 11;
  top: 0;
  right: ${(props) => (props.isOpen ? '0' : '-100%')};
  background-color: ${colors.ui.whiteBackground};
  overflow-x: hidden;
  transition: 0.5s;
  display: flex;
  flex-flow: column;
  align-items: center;
  @media ${device.large} {
    width: 595px;
  }
`;

const SidebarInternal = ({
  isOpen,
  clickHandler,
  sidebarTitle,
  children,
}: {
  isOpen: boolean;
  clickHandler: () => void;
  sidebarTitle: string;
  children?: any;
}) => {
  return (
    <SidebarContainer isOpen={isOpen}>
      <SidebarNav clickHandler={clickHandler} sidebarTitle={sidebarTitle} />
      {children}
    </SidebarContainer>
  );
};

export default SidebarInternal;
