import styled from 'styled-components';
import { typography, colors } from './global-styles';

export const Container = styled.article`
  text-align: center;
`;

export const StyledH1 = styled.h1`
  font-family: ${typography.titles.h1.font};
  font-style: normal;
  font-weight: 300;
  font-size: ${typography.titles.h1.fontSize};
  line-height: ${typography.titles.h1.lineHeight};
  color: ${colors.ui.darkSurface};
`;

export const StyledH2 = styled.h2`
  font-family: ${typography.titles.h2.font};
  font-style: normal;
  font-weight: 300;
  font-size: ${typography.titles.h2.fontSize};
  line-height: ${typography.titles.h2.lineHeight};
  color: ${colors.ui.darkSurface};
`;

export const StyledH3 = styled.h3`
  font-family: ${typography.titles.h3.font};
  font-style: normal;
  font-weight: 300;
  font-size: ${typography.titles.h3.fontSize};
  line-height: ${typography.titles.h3.lineHeight};
  color: ${colors.ui.darkSurface};
`;

export const StyledH4 = styled.h4`
  font-family: ${typography.titles.h4.font};
  font-style: normal;
  font-weight: 300;
  font-size: ${typography.titles.h4.fontSize};
  line-height: ${typography.titles.h4.lineHeight};
  color: ${colors.ui.darkSurface};
`;

export const StyledH5 = styled.h5`
  font-family: ${typography.titles.h5.font};
  font-style: normal;
  font-weight: 300;
  font-size: ${typography.titles.h5.fontSize};
  line-height: ${typography.titles.h5.lineHeight};
  color: ${colors.ui.darkSurface};
`;

export const StyledH6 = styled.h6`
  font-family: ${typography.titles.h6.font};
  font-style: normal;
  font-weight: 300;
  font-size: ${typography.titles.h6.fontSize};
  line-height: ${typography.titles.h6.lineHeight};
  color: ${colors.ui.darkSurface};
`;

export const BodyCopySmall = styled.p`
  font-family: ${typography.bodyCopy.font};
  font-style: normal;
  font-weight: normal;
  font-size: ${typography.bodyCopy.small.fontSize};
  line-height: ${typography.bodyCopy.small.lineHeight};
  letter-spacing: ${typography.bodyCopy.small.letterSpacing};
  color: ${colors.ui.darkSurface};
`;
