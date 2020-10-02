import React, { useEffect } from 'react';
import styled from 'styled-components';
import { device } from '../../../config/device';
import { colors } from '../../../config/global-styles';
import SidebarInternal from './sidebar-internal';

const GreyScreen = styled.div<{ isOpen: boolean }>`
  display: none;
  @media ${device.large} {
    display: ${(props) => (props.isOpen ? 'block' : 'none')};
    background-color: ${colors.ui.grey25percent};
    opacity: ${(props) => (props.isOpen ? '0.8' : '0')};
    z-index: ${(props) => (props.isOpen ? '5' : '-1')};
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    position: fixed;
    transition: 0.5s;
  }
`;

const SideBarContainer = styled.article`
  position: fixed;
  z-index: 10;
`;

const Sidebar = ({
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
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);
  return (
    <SideBarContainer>
      <GreyScreen isOpen={isOpen} />
      <SidebarInternal isOpen={isOpen} clickHandler={clickHandler} sidebarTitle={sidebarTitle}>
        {children}
      </SidebarInternal>
    </SideBarContainer>
  );
};

export default Sidebar;
