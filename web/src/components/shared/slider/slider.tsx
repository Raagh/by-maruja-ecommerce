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
  padding: 0 ${(props) => props.padding}rem 0 ${(props) => props.padding}rem;
  position: relative;
  background-image: url('/assets/Background-Slider.svg'), url('/assets/Background-Slider-2.svg');
  background-repeat: no-repeat, no-repeat;
  background-position: bottom, 0% 30%;

  @media ${device.large} {
    background-image: url('/assets/Background-Slider-Desktop.svg'), url('/assets/Background-Slider-Desktop-2.svg');
    background-repeat: repeat-x, no-repeat;
    background-position: left bottom, 0% 38%;
    background-size: auto, 100%;
    padding: 0 ${(props) => props.padding}rem 12rem ${(props) => props.padding}rem;
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
    sliderContainerPadding: 4.5,
  });

  const dragRef = useRef({
    dragging: false,
    initialDrag: true,
    lastMouseX: 0,
    sliderTotalWidth: (styles.width + styles.imageMargin * 16) * recommended.length + styles.sliderContainerPadding * 32,
  });

  const properWidth = windowWidth >= desktopWidth ? 330 : 240;

  if (styles.width != properWidth) {
    useStyles({
      translateValue: styles.translateValue,
      width: properWidth,
      imageMargin: styles.imageMargin,
      sliderContainerPadding: styles.sliderContainerPadding,
    });
    dragRef.current.sliderTotalWidth = (properWidth + styles.imageMargin * 16) * recommended.length + styles.sliderContainerPadding * 32;
  }

  const handleMouseDown = () => {
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
      const nextTranslateValue = styles.translateValue + (dragRef.current.lastMouseX - xCoordinate);
      const beyondLeftBoundry = nextTranslateValue < 0;
      const beyondRightBoundry = nextTranslateValue > dragRef.current.sliderTotalWidth - windowWidth;

      if (beyondLeftBoundry) {
        useStyles({
          translateValue: 0,
          width: styles.width,
          imageMargin: styles.imageMargin,
          sliderContainerPadding: styles.sliderContainerPadding,
        });
      } else if (beyondRightBoundry) {
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
      {recommended && styles.translateValue < dragRef.current.sliderTotalWidth - windowWidth - 1 && <SliderArrow direction="right" />}
      {styles.translateValue > 1 && <SliderArrow direction="left" />}
      <SliderSteppers images={recommended} values={styles} />
    </SliderContainer>
  );
};

export default Slider;
