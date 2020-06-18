import React from 'react';
import styled from 'styled-components';
import { RecommendedConfiguration } from '../../../model/recommended-configuration';
import RemoteResponsiveImage from '../image-types/remote-responsive-image';

type SlideRemoteResponsiveImage = {
  width: number;
};

const SlideImage = styled(RemoteResponsiveImage)<SlideRemoteResponsiveImage>`
  width: ${(props) => -props.width}px;
  height: 360px;

  object-fit: cover;
`;

const SlideLink = styled.article`
  margin: 0 1rem 0 1rem;
`;

const SliderImage = ({ remoteImage, width }: { remoteImage: RecommendedConfiguration; width: number }) => {
  return (
    <SlideLink>
      <SlideImage image={remoteImage.image} asset={remoteImage.asset} alt={remoteImage.name} width={width} />
    </SlideLink>
  );
};

export default SliderImage;
