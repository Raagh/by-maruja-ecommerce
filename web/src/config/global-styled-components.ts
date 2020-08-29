import styled, { css } from 'styled-components';
import { typography, colors } from './global-styles';
import { device } from './device';

const H1Styles = css`
  font-family: ${typography.titles.h1.font.name};
  font-style: normal;
  font-weight: ${typography.titles.h1.font.regularWeight};
  font-size: ${typography.titles.h1.fontSize};
  line-height: ${typography.titles.h1.lineHeight};
  color: ${colors.ui.darkSurface};
`;

const H2Styles = css`
  font-family: ${typography.titles.h2.font.name};
  font-style: normal;
  font-weight: ${typography.titles.h2.font.regularWeight};
  font-size: ${typography.titles.h2.fontSize};
  line-height: ${typography.titles.h2.lineHeight};
  color: ${colors.ui.darkSurface};
`;

const H3Styles = css`
  font-family: ${typography.titles.h3.font.name};
  font-style: normal;
  font-weight: ${typography.titles.h3.font.regularWeight};
  font-size: ${typography.titles.h3.fontSize};
  line-height: ${typography.titles.h3.lineHeight};
  color: ${colors.ui.darkSurface};
`;

const H4Styles = css`
  font-family: ${typography.titles.h4.font.name};
  font-style: normal;
  font-weight: ${typography.titles.h4.font.regularWeight};
  font-size: ${typography.titles.h4.fontSize};
  line-height: ${typography.titles.h4.lineHeight};
  color: ${colors.ui.darkSurface};
`;

const H5Styles = css`
  font-family: ${typography.titles.h5.font.name};
  font-style: normal;
  font-weight: ${typography.titles.h5.font.regularWeight};
  font-size: ${typography.titles.h5.fontSize};
  line-height: ${typography.titles.h5.lineHeight};
  color: ${colors.ui.darkSurface};
`;

// const H6Styles = css`
//   font-family: ${typography.titles.h6.font.name};
//   font-style: normal;
//   font-weight: ${typography.titles.h6.font.fontWeight};
//   font-size: ${typography.titles.h6.fontSize};
//   line-height: ${typography.titles.h6.lineHeight};
//   color: ${colors.ui.darkSurface};
// `;

export const StyledH1 = styled.h1`
  ${H3Styles}

  @media ${device.large} {
    ${H1Styles}
  }
`;

export const StyledH4 = styled.h4`
  ${H5Styles}

  @media ${device.large} {
    ${H4Styles}
  }
`;

export const StyledH2 = styled.h2`
  ${H4Styles}

  @media ${device.large} {
    ${H2Styles}
  }
`;

export const StyledH3 = styled.h3`
  ${H4Styles}

  @media ${device.large} {
    ${H3Styles}
  }
`;

export const Subtitle = styled.p`
  font-family: ${typography.subtitle.font.name};
  font-style: normal;
  font-weight: ${typography.subtitle.font.fontWeight};
  font-size: ${typography.subtitle.fontSize};
  line-height: ${typography.subtitle.lineHeight};
  text-align: center;
  letter-spacing: ${typography.subtitle.letterSpacing};
  text-transform: ${typography.subtitle.textTransform};
  color: ${colors.primary.dark};
`;

export const BodyCopyRegularSmall = styled.p`
  font-family: ${typography.bodyCopy.regular.font.name};
  font-style: normal;
  font-weight: ${typography.bodyCopy.regular.fontWeight};
  font-size: ${typography.bodyCopy.regular.small.fontSize};
  line-height: ${typography.bodyCopy.regular.small.lineHeight};
  letter-spacing: ${typography.bodyCopy.regular.small.letterSpacing};
  color: ${colors.ui.darkSurface};
`;

export const BodyCopyRegularLarge = styled.p`
  font-family: ${typography.bodyCopy.regular.font.name};
  font-style: normal;
  font-weight: ${typography.bodyCopy.regular.fontWeight};
  font-size: ${typography.bodyCopy.regular.large.fontSize};
  line-height: ${typography.bodyCopy.regular.large.lineHeight};
  letter-spacing: ${typography.bodyCopy.regular.large.letterSpacing};
  color: ${colors.ui.darkSurface};
`;

export const BodyCopyBoldSmall = styled.p`
  font-family: ${typography.bodyCopy.bold.font.name};
  font-style: normal;
  font-weight: ${typography.bodyCopy.bold.fontWeight};
  font-size: ${typography.bodyCopy.bold.small.fontSize};
  line-height: ${typography.bodyCopy.bold.small.lineHeight};
  letter-spacing: ${typography.bodyCopy.bold.small.letterSpacing};
  color: ${colors.ui.darkSurface};
`;

export const BodyCopyBoldLarge = styled.p`
  font-family: ${typography.bodyCopy.bold.font.name};
  font-style: normal;
  font-weight: ${typography.bodyCopy.bold.fontWeight};
  font-size: ${typography.bodyCopy.bold.large.fontSize};
  line-height: ${typography.bodyCopy.bold.large.lineHeight};
  letter-spacing: ${typography.bodyCopy.bold.large.letterSpacing};
  color: ${colors.ui.darkSurface};
`;

export const LinksSmall = styled.a`
  font-family: ${typography.links.small.font.name};
  font-style: normal;
  font-weight: ${typography.links.small.font.fontWeight};
  font-size: ${typography.links.small.fontSize};
  line-height: ${typography.links.small.lineHeight};
  letter-spacing: ${typography.links.small.letterSpacing};
  color: ${colors.ui.darkSurface};

  text-transform: ${typography.links.textTransform};
`;

export const LinksLarge = styled.a`
  font-family: ${typography.links.large.font.name};
  font-style: normal;
  font-weight: ${typography.links.large.font.fontWeight};
  font-size: ${typography.links.large.fontSize};
  line-height: ${typography.links.large.lineHeight};
  letter-spacing: ${typography.links.large.letterSpacing};
  color: ${colors.ui.darkSurface};

  text-transform: ${typography.links.textTransform};
`;

export const LabelSmall = styled.div`
  font-family: ${typography.labels.small.font.name};
  font-style: normal;
  font-weight: ${typography.labels.small.font.fontWeight};
  font-size: ${typography.labels.small.fontSize};
  line-height: ${typography.labels.small.lineHeight};
  letter-spacing: ${typography.labels.small.letterSpacing};
  color: ${colors.ui.darkSurface};
`;

export const AlignedCenterContainer = styled.article`
  text-align: center;
`;

export const LabelLarge = styled.p`
  font-family: ${typography.labels.large.regular.font.name};
  font-style: normal;
  font-weight: ${typography.labels.large.regular.font.fontWeight};
  font-size: ${typography.labels.large.regular.fontSize};
  line-height: ${typography.labels.large.regular.lineHeight};
  letter-spacing: ${typography.labels.large.regular.letterSpacing};
  color: ${colors.ui.darkSurface};
`;

export const LabelLargeBold = styled.p`
  font-family: ${typography.labels.large.bold.font.name};
  font-style: normal;
  font-weight: ${typography.labels.large.bold.font.fontWeight};
  font-size: ${typography.labels.large.bold.fontSize};
  line-height: ${typography.labels.large.bold.lineHeight};
  letter-spacing: ${typography.labels.large.bold.letterSpacing};
  color: ${colors.ui.darkSurface};
`;

export const CaptionSmall = styled.div`
  font-family: ${typography.captions.font.name};
  font-style: normal;
  font-weight: ${typography.captions.font.fontWeight};
  font-size: ${typography.captions.small.fontSize};
  line-height: ${typography.captions.small.lineHeight};
  letter-spacing: ${typography.captions.small.letterSpacing};
  color: ${colors.ui.lightBackground};
`;

export const CaptionLarge = styled.div`
  font-family: ${typography.captions.font.name};
  font-weight: ${typography.captions.font.fontWeight};
  font-size: ${typography.captions.large.fontSize};
  line-height: ${typography.captions.large.lineHeight};
  letter-spacing: ${typography.captions.large.letterSpacing};
  color: ${colors.ui.darkSurface};
  color: ${colors.ui.grey50percent};
`;
