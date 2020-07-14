import React from 'react';
import styled from 'styled-components';
import { RecommendedConfiguration } from '../../../model/recommended-configuration';
import NameAndPrice from '../name-and-price';
import { device } from '../../../config/device';
import RemoteFixedSizeImage from '../image-types/remote-fixed-size-image';

type SlideRemoteResponsiveImage = {
  width: number;
};

const SlideImage = styled(RemoteFixedSizeImage)<SlideRemoteResponsiveImage>`
  width: ${(props) => props.width}px;
  height: 360px;
  user-select: none;
  pointer-events: none;

  object-fit: cover;
  @media ${device.large} {
    height: 495px;
  }
`;

const SlideLink = styled.article<{ marginValue: number }>`
  margin: 0 ${(props) => props.marginValue}rem 0 ${(props) => props.marginValue}rem;
`;

const SliderImage = ({ remoteImage, width, margin }: { remoteImage: RecommendedConfiguration; width: number; margin: number }) => {
  return (
    <SlideLink marginValue={margin}>
      <SlideImage image={remoteImage.image} asset={remoteImage.asset} alt={remoteImage.name} width={width} />
      <NameAndPrice name={remoteImage.name} price={remoteImage.price} />
    </SlideLink>
  );
};

export default SliderImage;
