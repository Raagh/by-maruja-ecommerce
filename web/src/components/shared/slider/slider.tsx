import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import SliderContent from './slider-content';
import SliderArrow from './slider-arrow';
import SliderSteppers from './slider-steppers';
import { RecommendedConfiguration } from '../../../model/recommended-configuration';
import { device } from '../../../config/device';

const SliderContainer = styled.article<{ padding: number }>`
  width: 100vw;
  overflow: hidden;
  padding: 0 ${(props) => props.padding}vw 0 ${(props) => props.padding}vw;
  position: relative;
  background-image: url('/assets/Background-Slider.svg');
  background-repeat: no-repeat;
  background-position: left bottom;
  background-size: 100%;
  @media ${device.medium} {
    background-image: url('/assets/Background-Slider-Desktop.svg');
    padding: 0 6rem 6.5rem 6rem;
  }
`;

const Slider = ({ recommended }: { recommended: Array<RecommendedConfiguration> }) => {
  const [windowWidth, useWindowWidth] = useState(0);
  const desktopWidth = parseInt(device.large.match(/\d+/)[0]);
  useEffect(() => {
    useWindowWidth(window.innerWidth);
    window.addEventListener('resize', () => useWindowWidth(window.innerWidth));
  }, []);

  const [styles, useStyles] = useState({
    translateValue: 0,
    width: 240,
    imageMargin: 1,
    sliderContainerPadding: 15,
  });

  const dragRef = useRef({
    dragging: false,
    initialDrag: true,
    lastMouseX: 0,
    sliderTotalWidth: (styles.width + styles.imageMargin * 16) * recommended.length + (windowWidth / 50) * styles.sliderContainerPadding,
  });

  const properWidth = windowWidth >= desktopWidth ? 330 : 240;

  if (styles.width != properWidth) {
    useStyles({
      translateValue: styles.translateValue,
      width: properWidth,
      imageMargin: styles.imageMargin,
      sliderContainerPadding: 5,
    });
    dragRef.current.sliderTotalWidth = (properWidth + styles.imageMargin * 16) * recommended.length + (windowWidth / 50) * 5;
  }

  const handleMouseDown = () => {
    dragRef.current.sliderTotalWidth =
      (styles.width + styles.imageMargin * 16) * recommended.length + (windowWidth / 50) * styles.sliderContainerPadding;

    if (windowWidth < dragRef.current.sliderTotalWidth) dragRef.current.dragging = true;
  };

  const handleMouseUp = () => {
    dragRef.current.dragging = false;
    dragRef.current.initialDrag = true;
  };

  const handleMouseLeave = () => {
    dragRef.current.dragging = false;
    dragRef.current.initialDrag = true;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    handleDrag(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    handleDrag(e.touches[0].clientX);
  };

  const handleDrag = (xCoordinate: number) => {
    if (dragRef.current.dragging) {
      if (dragRef.current.initialDrag) {
        dragRef.current.lastMouseX = xCoordinate;
        dragRef.current.initialDrag = false;
      }
      const nextTranslateValue = styles.translateValue + ((dragRef.current.lastMouseX - xCoordinate) / 100) * 150;
      const beyondLeftBoundary = nextTranslateValue < 0;
      const beyondRightBoundary = nextTranslateValue > dragRef.current.sliderTotalWidth - windowWidth;

      if (beyondLeftBoundary) {
        useStyles({
          translateValue: 0,
          width: styles.width,
          imageMargin: styles.imageMargin,
          sliderContainerPadding: styles.sliderContainerPadding,
        });
      } else if (beyondRightBoundary) {
        useStyles({
          translateValue: dragRef.current.sliderTotalWidth - windowWidth,
          width: styles.width,
          imageMargin: styles.imageMargin,
          sliderContainerPadding: styles.sliderContainerPadding,
        });
      } else {
        useStyles({
          translateValue: nextTranslateValue,
          width: styles.width,
          imageMargin: styles.imageMargin,
          sliderContainerPadding: styles.sliderContainerPadding,
        });
      }
      dragRef.current.lastMouseX = xCoordinate;
    }
  };

  return (
    <SliderContainer
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
      onMouseMove={(e: React.MouseEvent) => handleMouseMove(e)}
      onTouchMove={(e: React.TouchEvent) => handleTouchMove(e)}
      onTouchStart={handleMouseDown}
      onTouchEnd={handleMouseLeave}
      padding={styles.sliderContainerPadding}
    >
      <SliderContent values={styles} images={recommended} />
      {styles.translateValue < dragRef.current.sliderTotalWidth - windowWidth - 1 && <SliderArrow direction="right" />}
      {styles.translateValue > styles.width / 2 && <SliderArrow direction="left" />}
      <SliderSteppers windowWidth={windowWidth} images={recommended} values={styles} />
    </SliderContainer>
  );
};

export default Slider;
