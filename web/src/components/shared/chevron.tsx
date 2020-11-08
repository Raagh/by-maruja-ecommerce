import React from 'react';

import styled from 'styled-components';

const ChevronIcon = styled.img<{ isOpen: boolean; makeStatic: boolean }>`
  ${(props) => (props.isOpen ? 'transform: scaleY(-1);' : '')};
  cursor: pointer;
  user-select: none;
  ${(props) => (props.makeStatic ? 'display: none;' : '')};
`;

const Chevron = ({ isOpen, makeStatic = false }: { isOpen: boolean; makeStatic?: boolean }) => {
  return <ChevronIcon alt="chevron-icon" src="/assets/Chevron.svg" isOpen={isOpen} makeStatic={makeStatic} />;
};

export default Chevron;
