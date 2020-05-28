import styled from 'styled-components';
import { typography, colors } from './global-styles';

export const AlignedCenterContainer = styled.article`
  text-align: center;
`;

// const StyledH1 = css`
//   font-family: ${typography.titles.h1.font.name};
//   font-style: normal;
//   font-weight: ${typography.titles.h1.font.regularWeight};
//   font-size: ${typography.titles.h1.fontSize};
//   line-height: ${typography.titles.h1.lineHeight};
//   color: ${colors.ui.darkSurface};
// `;

// const StyledH2 = css`
//   font-family: ${typography.titles.h2.font.name};
//   font-style: normal;
//   font-weight: ${typography.titles.h2.font.regularWeight};
//   font-size: ${typography.titles.h2.fontSize};
//   line-height: ${typography.titles.h2.lineHeight};
//   color: ${colors.ui.darkSurface};
// `;

// const StyledH3 = css`
//   font-family: ${typography.titles.h3.font.name};
//   font-style: normal;
//   font-weight: ${typography.titles.h3.font.regularWeight};
//   font-size: ${typography.titles.h3.fontSize};
//   line-height: ${typography.titles.h3.lineHeight};
//   color: ${colors.ui.darkSurface};
// `;

// const StyledH4 = css`
//   font-family: ${typography.titles.h4.font.name};
//   font-style: normal;
//   font-weight: ${typography.titles.h4.font.regularWeight};
//   font-size: ${typography.titles.h4.fontSize};
//   line-height: ${typography.titles.h4.lineHeight};
//   color: ${colors.ui.darkSurface};
// `;

// const StyledH5 = css`
//   font-family: ${typography.titles.h5.font.name};
//   font-style: normal;
//   font-weight: ${typography.titles.h5.font.regularWeight};
//   font-size: ${typography.titles.h5.fontSize};
//   line-height: ${typography.titles.h5.lineHeight};
//   color: ${colors.ui.darkSurface};
// `;

// const StyledH6 = css`
//   font-family: ${typography.titles.h6.font.name};
//   font-style: normal;
//   font-weight: ${typography.titles.h6.font.regularWeight};
//   font-size: ${typography.titles.h6.fontSize};
//   line-height: ${typography.titles.h6.lineHeight};
//   color: ${colors.ui.darkSurface};
// `;

export const BodyCopySmall = styled.p`
  font-family: ${typography.bodyCopy.font.name};
  font-style: normal;
  font-weight: ${typography.bodyCopy.font.regularWeight};
  font-size: ${typography.bodyCopy.small.fontSize};
  line-height: ${typography.bodyCopy.small.lineHeight};
  letter-spacing: ${typography.bodyCopy.small.letterSpacing};
  color: ${colors.ui.darkSurface};
`;

export const LinksSmall = styled.a`
  font-family: ${typography.links.font.name};
  font-style: normal;
  font-weight: ${typography.links.font.regularWeight};
  font-size: ${typography.links.small.fontSize};
  line-height: ${typography.links.small.lineHeight};
  letter-spacing: ${typography.links.small.letterSpacing};
  color: ${colors.ui.darkSurface};

  text-transform: ${typography.links.textTransform};
`;
