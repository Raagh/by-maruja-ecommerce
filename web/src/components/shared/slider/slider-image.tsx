import React from 'react';
import styled from 'styled-components';
import { Image } from '../../../model/image';
import RemoteResponsiveImage from '../image-types/remote-responsive-image';

const SlideImage = styled(RemoteResponsiveImage)``;

const SliderImage = (props: Image) => {
  return (
    <a href="/">
      <SlideImage image={props.image} asset={props.asset} alt={props.alt} />
    </a>
  );
};

export default SliderImage;
