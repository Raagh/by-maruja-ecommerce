import React from 'react';
import styled from 'styled-components';
import { typography, colors } from '../../config/global-styles';

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
  height: 54px;
  width: 100%;
  border: 2px solid ${colors.ui.darkSurface};
  user-select: none;
  outline: none;

  :hover,
  :focus,
  :active {
    background: ${colors.primary.dark};
    box-shadow: 0px 4px 8px rgba(81, 50, 50, 0.25);
    border-radius: 4px;
    border: 2px solid ${colors.primary.dark};
  }
`;

const PrimaryButton = ({ text, inverted, onClick }: { text: string; inverted?: boolean; onClick: any }) => {
  return (
    <StyledButton onClick={() => onClick()} inverted={inverted}>
      {text}
    </StyledButton>
  );
};

export default PrimaryButton;
