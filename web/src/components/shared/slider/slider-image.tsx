import React from 'react';
import styled from 'styled-components';
import { Image } from '../../../model/image';
import RemoteFixedSizeImage from '../image-types/remote-fixed-size-image';

const SlideImage = styled(RemoteFixedSizeImage)`
  width: 200px;
`;

const SliderImage = (props: Image) => {
  return (
    <a href="/">
      <SlideImage image={props.image} asset={props.asset} alt={props.alt} />
    </a>
  );
};

export default SliderImage;
