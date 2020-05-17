import React from 'react';
import styled from 'styled-components';
import { typography, colors } from '../../config/globalstyles';
import Button from '../shared/button';

const Container = styled.article`
  text-align: center;
`;

const TextContainer = styled.div`
  padding: 0 1.5rem 0 1.5rem;
`;

const Title = styled.h1`
  font-family: ${typography.titles.h3.font.name};
  font-weight: ${typography.titles.h3.font.regularWeight};
  font-size: ${typography.titles.h3.fontSize};
  line-height: ${typography.titles.h3.lineHeight};
`;

const SubTitle = styled.p`
  margin-top: 1.25rem;
  font-family: ${typography.bodyCopy.font.name};
  font-weight: ${typography.bodyCopy.font.regularWeight};
  font-size: ${typography.bodyCopy.small.fontSize};
  line-height: ${typography.bodyCopy.small.lineHeight};
  letter-spacing: ${typography.bodyCopy.small.letterSpacing};
  opacity: 0.75;
  color: ${colors.ui.darkSurface};
`;

const Img = styled.img`
  width: 100%;
`;

const Hero = () => {
  return (
    <Container>
      <Img src="./hero-image.png" alt="hero image" />
      <TextContainer>
        <Title>Nuevos looks de otoño</Title>
        <SubTitle>Sweater amplio color neutro, jeans, borcegos y maruja</SubTitle>
        <Button text="Conocé más" />
      </TextContainer>
    </Container>
  );
};

export default Hero;
