import React from 'react';
import styled from 'styled-components';
import { Container, StyledH3, BodyCopySmall } from '../../config/global-styled-components';
import Button from '../shared/button';
import { urlFor } from '../../../lib/sanity';
import { HeroConfiguration } from '../../model/hero-configuration';

const TextContainer = styled.div`
  padding: 0 1.5rem 0 1.5rem;
`;

const SubTitle = styled(BodyCopySmall)`
  margin-top: 1.25rem;
  opacity: 0.75;
`;

const Img = styled.img`
  width: 100%;
  height: 80%;
  margin-bottom: 1.5rem;
`;

const Hero = (props: HeroConfiguration) => {
  return (
    <Container>
      <Img src={urlFor(props.image)} alt="hero image" />
      <TextContainer>
        <StyledH3>{props.title}</StyledH3>
        <SubTitle>{props.subtitle}</SubTitle>
        <Button text={props.buttonText} url={props.buttonURL} />
      </TextContainer>
    </Container>
  );
};

export default Hero;
