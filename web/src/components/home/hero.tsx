import React from 'react';
import styled from 'styled-components';
import { typography, colors } from '../../config/global-styles';
import Button from '../shared/button';
import { urlFor } from '../../../lib/sanity';
import { HeroConfiguration } from '../../model/hero-configuration';

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
  height: 80%;
  margin-bottom: 1.5rem;
`;

const Hero = (props: HeroConfiguration) => {
  return (
    <Container>
      <Img src={urlFor(props.image).url()} alt="hero image" />
      <TextContainer>
        <Title>{props.title}</Title>
        <SubTitle>{props.subtitle}</SubTitle>
        <Button text={props.buttonText} url={props.buttonURL} />
      </TextContainer>
    </Container>
  );
};

export default Hero;
