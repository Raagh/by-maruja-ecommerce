import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

import { typography, colors } from '../../config/global-styles';

const motion = (_: any) => keyframes`
  0% {
      transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-right: 1rem;
`;

const RingSpinner = styled.div`
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 34px;
  height: 34px;
  margin: 6px;
  border: 6px solid ${colors.primary.default};
  border-radius: 50%;
  animation: ${(p) => motion(p)} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: ${colors.primary.default} transparent transparent transparent;
  :nth-child(1) {
    animation-delay: -0.45s;
  }
  :nth-child(2) {
    animation-delay: -0.3s;
  }
  :nth-child(3) {
    animation-delay: -0.15s;
  }
`;

const Ring = () => (
  <Wrapper>
    <RingSpinner />
  </Wrapper>
);

const StyledButton = styled.button<{ inverted: boolean }>`
  display: inline-block;
  font-family: ${typography.links.large.font.name};
  font-weight: ${typography.links.large.font.fontWeight};
  font-size: ${typography.links.large.fontSize};
  line-height: ${typography.links.large.lineHeight};
  letter-spacing: ${typography.links.large.letterSpacing};
  text-transform: ${typography.links.textTransform};
  background: ${(props) => (props.inverted ? colors.ui.whiteBackground : colors.ui.darkSurface)};
  color: ${(props) => (props.inverted ? colors.ui.darkSurface : colors.ui.whiteBackground)};
  text-decoration: none;
  border: none;
  padding: 1rem;
  border-radius: 4px;
  cursor: pointer;
  height: 54px;
  width: 100%;
  border: 2px solid ${colors.ui.darkSurface};
  user-select: none;
  outline: none;
  transition: ease-out 200ms;

  :hover {
    background: ${colors.primary.dark};
    box-shadow: 0px 4px 8px rgba(81, 50, 50, 0.25);
    border: 2px solid ${colors.primary.dark};
    color: ${colors.ui.whiteBackground};
  }

  :active {
    background: ${colors.primary.default};
    border: 2px solid ${colors.primary.default};
  }

  :disabled {
    border: 2px solid ${colors.ui.grey25percent};
    background: ${colors.ui.grey25percent};
    user-select: none;
  }
`;

const PrimaryButton = ({
  text,
  inverted,
  onClick,
  shouldLoad,
  disabled = false,
}: {
  text: string;
  inverted?: boolean;
  onClick: any;
  shouldLoad?: boolean;
  disabled?: boolean;
}) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleOnClick = () => {
    if (shouldLoad) setIsLoading(true);
    if (!disabled) onClick();
  };

  return (
    <StyledButton onClick={handleOnClick} inverted={inverted} disabled={disabled} autoFocus={false}>
      {isLoading && <Ring />}
      {!isLoading && text}
    </StyledButton>
  );
};

export default PrimaryButton;
