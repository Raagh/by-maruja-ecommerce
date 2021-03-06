import React from 'react';
import Link from 'next/link';

import styled from 'styled-components';

import { RecommendedConfiguration } from '../../../model/recommended-configuration';
import { device } from '../../../config/device';
import RemoteFixedSizeImage from '../image-types/remote-fixed-size-image';
import NameAndPrice from '../name-and-price';

const SlideImage = styled(RemoteFixedSizeImage)`
  height: 360px;

  user-select: none;
  cursor: pointer;
  object-fit: cover;
  @media ${device.large} {
    height: 495px;
  }
  transition: all 0.5s ease-in-out;

  :hover {
    transform: scale(1.1);
  }
`;

const SlideLink = styled.article`
  overflow: hidden;
`;

const Container = styled.section`
  height: 450px;
  padding: 0 0 0 2rem;
  @media ${device.large} {
    padding: 0 0 0 2.5rem;
    height: 550px;
  }
`;

const SliderImage = ({ remoteImage, isMoving }: { remoteImage: RecommendedConfiguration; isMoving: boolean }) => {
  const link = `/products/${remoteImage._id}`;
  return (
    <Container>
      <Link href={link} passHref>
        <SlideLink
          onClick={(e: React.MouseEvent<Element, MouseEvent>) => {
            if (isMoving) {
              e.preventDefault();
            }
          }}
        >
          <SlideImage image={remoteImage.image} asset={remoteImage.asset} alt={remoteImage.name} />
        </SlideLink>
      </Link>
      <NameAndPrice name={remoteImage.name} price={remoteImage.price} />
    </Container>
  );
};

export default SliderImage;
