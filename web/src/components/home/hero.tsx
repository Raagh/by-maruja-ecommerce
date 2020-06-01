import React from 'react';
import styled from 'styled-components';
import { AlignedCenterContainer, BodyCopyRegularSmall, StyledH1 } from '../../config/global-styled-components';
import Button from '../shared/button';
import { urlFor } from '../../../lib/sanity';
import { HeroConfiguration } from '../../model/hero-configuration';

const TextContainer = styled.div`
  padding: 0 1.5rem 0 1.5rem;
`;

const SubTitle = styled(BodyCopyRegularSmall)`
  margin-top: 1.25rem;
  opacity: 0.75;
`;

const Img = styled.img`
  width: 100%;
  height: 80%;
  margin-bottom: 1.5rem;
`;

const HomeTitle = styled(StyledH1)``;

const Hero = (props: HeroConfiguration) => {
  return (
    <AlignedCenterContainer>
      <Img src={urlFor(props.image)} alt="hero image" />
      <TextContainer>
        <HomeTitle>{props.title}</HomeTitle>
        <SubTitle>{props.subtitle}</SubTitle>
        <Button text={props.buttonText} url={props.buttonURL} />
      </TextContainer>
    </AlignedCenterContainer>
  );
};

export default Hero;
