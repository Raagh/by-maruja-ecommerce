import React from 'react';
import styled from 'styled-components';
import { Subtitle, StyledH2, LabelSmall } from '../../config/global-styled-components';
import { UserReviewsConfiguration } from '../../model/user-reviews-configuration';
import RemoteFixedImage from '../shared/image-types/remote-fixed-size-image';

const ReviewContainer = styled.article`
  margin-top: 5rem;
`;

const ReviewTitle = styled(Subtitle)``;

const ReviewText = styled(StyledH2)`
  padding: 2rem 2rem 0 2rem;
  text-align: center;
`;

const ReviewTag = styled(LabelSmall)`
  margin-top: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const InstagramLogo = styled.img`
  margin-right: 0.5rem;
`;

const InstagramProfileImage = styled(RemoteFixedImage)`
  padding-top: 2rem;
  width: 100%;
`;

const ReviewTagText = styled(LabelSmall)``;

const UserReviews = ({ text, instagramTag, image, asset }: UserReviewsConfiguration) => {
  return (
    <ReviewContainer>
      <ReviewTitle>Historias Felices</ReviewTitle>
      <ReviewText>{text}</ReviewText>
      <ReviewTag>
        <InstagramLogo src="/assets/Instagram.svg" />
        <ReviewTagText>{instagramTag}</ReviewTagText>
      </ReviewTag>
      <InstagramProfileImage image={image} asset={asset} alt="instagram profile" />
    </ReviewContainer>
  );
};

export default UserReviews;
