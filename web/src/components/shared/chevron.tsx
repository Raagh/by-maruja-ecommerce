import React from 'react';

import styled from 'styled-components';

const ChevronIcon = styled.img<{ isOpen: boolean }>`
  ${(props) => (props.isOpen ? 'transform: scaleY(-1);' : '')};
  cursor: pointer;
  user-select: none;
`;

const Chevron = ({ isOpen }: { isOpen: boolean }) => {
  return <ChevronIcon alt="chevron-icon" src="/assets/Chevron.svg" isOpen={isOpen} />;
};

export default Chevron;
