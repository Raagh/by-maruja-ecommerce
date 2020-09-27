import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { typography, colors } from '../../config/global-styles';

const StyledLink = styled.a<{ inverted: boolean }>`
  display: inline-block;
  font-family: ${typography.links.large.font.name};
  font-weight: ${typography.links.large.font.fontWeight};
  font-size: ${typography.links.large.fontSize};
  line-height: ${typography.links.large.lineHeight};
  letter-spacing: ${typography.links.large.letterSpacing};
  text-transform: ${typography.links.textTransform};
  color: ${(props) => (props.inverted ? colors.ui.darkSurface : colors.ui.whiteBackground)};
  text-decoration: none;
`;

const PrimaryButtonContainer = styled.div<{ inverted: boolean }>`
  border: 2px solid ${colors.ui.darkSurface};
  height: 54px;
  border-radius: 9999;
  background: ${(props) => (props.inverted ? colors.ui.whiteBackground : colors.ui.darkSurface)};
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
`;

const PrimaryButton = ({ text, url, inverted }: { text: string; url: string; inverted?: boolean }) => {
  return (
    <PrimaryButtonContainer inverted={inverted}>
      <Link href={url} passHref>
        <StyledLink inverted={inverted}>{text}</StyledLink>
      </Link>
    </PrimaryButtonContainer>
  );
};

export default PrimaryButton;
