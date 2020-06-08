import React from 'react';
import styled from 'styled-components';
import { AlignedCenterContainer, BodyCopyRegularSmall, StyledH1 } from '../../config/global-styled-components';
import Button from '../shared/button';
import { HeroConfiguration } from '../../model/hero-configuration';
import { device } from '../../config/device';
import { colors } from '../../config/global-styles';
import RemoteResponsiveImage from '../shared/image-types/remote-responsive-image';

const TextContainer = styled.div`
  padding: 0 1.5rem 0 1.5rem;

  @media ${device.large} {
    height: 100%;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const SubTitle = styled(BodyCopyRegularSmall)`
  margin-top: 1.25rem;
  opacity: 0.75;

  @media ${device.large} {
    margin-top: 2rem;
    margin-bottom: 3rem;
    width: 50%;
  }
`;

const Img = styled(RemoteResponsiveImage)`
  width: 100%;
  height: 80%;
  margin-bottom: 1.5rem;
  object-fit: contain;

  @media ${device.large} {
    height: 100%;
    margin-bottom: 0;
  }
`;

const HomeTitle = styled(StyledH1)`
  @media ${device.large} {
    width: 70%;
  }
`;

const HomeContainer = styled(AlignedCenterContainer)`
  background-color: ${colors.ui.lightBackground};
  @media ${device.large} {
    display: flex;
    flex-direction: row-reverse;
    height: 100%;
  }
`;

const Hero = (props: HeroConfiguration) => {
  return (
    <HomeContainer>
      <Img image={props.image} asset={props.asset} alt="hero image" />
      <TextContainer>
        <HomeTitle>{props.title}</HomeTitle>
        <SubTitle>{props.subtitle}</SubTitle>
        <Button text={props.buttonText} url={props.buttonURL} />
      </TextContainer>
    </HomeContainer>
  );
};

export default Hero;
