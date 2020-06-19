import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import SliderContent from './slider-content';
import SliderArrow from './slider-arrow';
import { RecommendedConfiguration } from '../../../model/recommended-configuration';

const SliderContainer = styled.article`
  width: 100vw;
  overflow: hidden;
  padding: 0 4.5rem 0 4.5rem;
  position: relative;
`;

const Slider = ({ recommended }: { recommended: Array<RecommendedConfiguration> }) => {
  const getWidth = () => -240;

  const [styles, useStyles] = useState({
    translateValue: 0,
    width: getWidth(),
  });

  const dragRef = useRef({
    dragging: false,
    initialDrag: true,
    lastMouseX: 0,
  });

  const handleMouseDown = () => {
    dragRef.current.dragging = true;
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
    if (dragRef.current.dragging) {
      if (dragRef.current.initialDrag) {
        dragRef.current.lastMouseX = e.clientX;
        dragRef.current.initialDrag = false;
      }

      const nextTranslateValue = styles.translateValue - (dragRef.current.lastMouseX - e.clientX);

      if (nextTranslateValue < 0 && nextTranslateValue > getWidth() * (recommended.length - 1) - 80) {
        useStyles({
          translateValue: nextTranslateValue,
          width: styles.width,
        });
        dragRef.current.lastMouseX = e.clientX;
      }
    }
  };

  return (
    <SliderContainer
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
      onMouseMove={(e: React.MouseEvent) => handleMouseMove(e)}
    >
      <SliderContent values={styles} images={recommended} />
      {recommended && styles.translateValue > getWidth() * (recommended.length - 1) && <SliderArrow direction="right" />}
      {styles.translateValue < -80 && <SliderArrow direction="left" />}
    </SliderContainer>
  );
};

export default Slider;
