import React from 'react';
import styled from 'styled-components';
import { Subtitle, StyledH3, LabelSmall } from '../../config/global-styled-components';
import { UserReviewsConfiguration } from '../../model/user-reviews-configuration';
import RemoteFixedImage from '../shared/image-types/remote-fixed-size-image';
import { colors } from '../../config/global-styles';
import { device } from '../../config/device';

const BackgroundContainer = styled.section`
  background-color: ${colors.ui.grey5percent};
`;

const ReviewContainer = styled.article`
  padding-top: 5rem;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media ${device.large} {
    padding-top: 8rem;
    padding-left: 8rem;
    padding-right: 8rem;
    flex-direction: row-reverse;
    margin: auto;
    max-width: 1600px;
  }
`;

const ReviewTitle = styled(Subtitle)`
  @media ${device.large} {
    text-align: left;
  }
`;

const ReviewText = styled(StyledH3)`
  padding: 2rem 2rem 0 2rem;
  text-align: center;

  @media ${device.large} {
    padding: 2rem 0;
    text-align: left;
  }
`;

const ReviewTag = styled(LabelSmall)`
  margin-top: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: center;

  @media ${device.large} {
    justify-content: left;
  }
`;

const InstagramLogo = styled.img`
  margin-right: 0.5rem;
`;

const InstagramProfileImage = styled(RemoteFixedImage)`
  text-align: center;
  margin-top: 2rem;
  max-width: 465px;
  max-height: 465px;

  @media ${device.large} {
    margin-top: 0;
  }
`;

const ReviewTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media ${device.large} {
    align-content: flex-start;
    padding: 4.5rem;
    max-width: 50%;
  }
`;

const ReviewTagText = styled(LabelSmall)``;

const UserReviews = ({ text, instagramTag, image, asset }: UserReviewsConfiguration) => {
  return (
    <BackgroundContainer>
      <ReviewContainer>
        <ReviewTextContainer>
          <ReviewTitle>Historias Felices</ReviewTitle>
          <ReviewText>{text}</ReviewText>
          <ReviewTag>
            <InstagramLogo alt="instagram-logo" src="/assets/Instagram.svg" />
            <ReviewTagText>{instagramTag}</ReviewTagText>
          </ReviewTag>
        </ReviewTextContainer>

        <InstagramProfileImage image={image} asset={asset} alt="instagram profile" />
      </ReviewContainer>
    </BackgroundContainer>
  );
};

export default UserReviews;
