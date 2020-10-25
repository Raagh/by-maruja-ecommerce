import React, { CSSProperties } from 'react';
import Carousel from 'react-multi-carousel';
import styled from 'styled-components';
import { device } from '../../../config/device';

import { RecommendedConfiguration } from '../../../model/recommended-configuration';
import SliderArrow from '../../shared/slider/slider-arrow';
import SliderImage from '../../shared/slider/slider-image';

const PaddedImageContainer = styled.div<{ isLast: boolean }>`
  ${(props: { isLast: boolean }) => (props.isLast ? 'margin-right: 2rem' : '')};
`;

const CustomDots = ({ onClick, ...rest }: { onClick?: any; active?: boolean; index?: number }) => {
  const { active, index } = rest;

  const indicatorStyles: CSSProperties = {
    bottom: '-50px',
    background: '#E4C2BE',
    border: '1px solid #E4C2BE',
    boxSizing: 'border-box',
    width: 8,
    height: 8,
    display: 'inline-block',
    margin: '0 8px 1rem 0',
    borderRadius: 9999,
  };

  if (active) {
    return (
      <li
        style={{ ...indicatorStyles, width: 45, bottom: '-50px' }}
        aria-label={`Selected: ${index} ${index + 1}`}
        title={`Selected: ${index} ${index + 1}`}
      />
    );
  }
  return (
    <li
      style={indicatorStyles}
      onClick={onClick}
      onKeyDown={onClick}
      value={index}
      key={index}
      role="button"
      tabIndex={0}
      title={`${index} ${index + 1}`}
      aria-label={`${index} ${index + 1}`}
    />
  );
};

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
    partialVisibilityGutter: 60,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    partialVisibilityGutter: 40,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    partialVisibilityGutter: 40,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    partialVisibilityGutter: 60,
  },
};

const CarouselContainer = styled.div`
  position: relative;

  @media ${device.large} {
    padding-bottom: 3rem;
  }
`;

const StyledCarousel = styled(Carousel)``;

const RecommendedCarousel = ({
  recommended,
  className,
}: {
  recommended: Array<RecommendedConfiguration>;
  className?: any;
}) => {
  return (
    <CarouselContainer>
      <StyledCarousel
        className={className}
        responsive={responsive}
        showDots
        customDot={<CustomDots />}
        partialVisible
        partialVisbile
        renderDotsOutside
        customRightArrow={<SliderArrow direction="right" />}
        customLeftArrow={<SliderArrow direction="left" />}
      >
        {recommended.map((x, index) => {
          return (
            <PaddedImageContainer key={x.name} isLast={recommended.length - 1 === index}>
              <SliderImage remoteImage={x} />
            </PaddedImageContainer>
          );
        })}
      </StyledCarousel>
    </CarouselContainer>
  );
};

export default RecommendedCarousel;
