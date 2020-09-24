import React from 'react';
import styled from 'styled-components';
import { device } from '../../../config/device';

const MenuContainer = styled.div<{ isOpen: boolean }>`
  height: 100%;
  width: ${(props) => (props.isOpen ? '100' : '0')}%;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #111;
  overflow-x: hidden;
  padding-top: 60px;
  transition: 0.5s;
  @media ${device.large} {
    display: none;
  }
`;

const Menu = ({ isOpen }: { isOpen: boolean }) => {
  return <MenuContainer isOpen={isOpen}></MenuContainer>;
};

export default Menu;
