import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { typography, colors } from '../../config/globalstyles';

const StyledLink = styled.a`
  margin-top: 1.25rem;
  display: inline-block;
  font-family: ${typography.links.font.name};
  font-weight: ${typography.links.font.boldWeight};
  font-size: ${typography.links.large.fontSize};
  line-height: ${typography.links.large.lineHeight};
  letter-spacing: ${typography.links.large.letterSpacing};
  text-transform: ${typography.links.textTransform};
  color: ${colors.ui.darkSurface};
  text-decoration: none;
`;

const UnderLinedComponent = styled.span`
  display: inline-block;
  border-bottom: 2px solid ${colors.ui.darkSurface};
  padding-bottom: 0.5rem;
  padding-right: 5px;
  padding-left: 5px;
  border-radius: 9999;
`;

export default ({ text }: { text: string }) => {
  return (
    <UnderLinedComponent>
      <Link href="/testing" passHref>
        <StyledLink>{text}</StyledLink>
      </Link>
    </UnderLinedComponent>
  );
};