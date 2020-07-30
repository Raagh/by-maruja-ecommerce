import React from 'react';
import styled from 'styled-components';
import LazyLoadImage from '../shared/image-types/lazy-image';
import { reusablePlaceholder, device } from '../../config/device';
import { StyledH2, BodyCopyRegularSmall } from '../../config/global-styled-components';
import Button from '../shared/button';
import { colors } from '../../config/global-styles';

const BackgroundContainer = styled.section`
  background-color: ${colors.ui.grey5percent};
`;

const AboutContainer = styled.section`
  padding-bottom: 5rem;
  @media ${device.large} {
    margin: auto;
    max-width: 1600px;
    padding: 8rem 9rem 6.4rem 9rem;
  }
`;

const Image = styled(LazyLoadImage)`
  width: 100%;
  @media ${device.large} {
    max-width: 50%;
    object-fit: cover;
    padding-right: 7rem;
  }
`;

const AboutTitle = styled(StyledH2)`
  display: none;
  @media ${device.large} {
    padding-bottom: 4rem;
    display: block;
  }
`;

const MobileAboutTitle = styled(StyledH2)`
  padding-top: 2rem;
  @media ${device.large} {
    display: none;
  }
`;

const ContentContainer = styled.article`
  display: flex;
  flex-direction: column;

  @media ${device.large} {
    flex-direction: row;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media ${device.large} {
    max-width: 30%;
  }
`;

const AboutDescription = styled(BodyCopyRegularSmall)`
  text-align: center;
  padding-bottom: 4rem;
  display: none;
  @media ${device.large} {
    display: block;
  }
`;

const AboutMobile = styled(BodyCopyRegularSmall)`
  text-align: center;
  padding-bottom: 2rem;
  padding-top: 2rem;
  display: block;
  @media ${device.large} {
    display: none;
  }
`;

const MobileHeartIcon = styled.img`
  padding-top: 2rem;

  @media ${device.large} {
    display: none;
  }
`;

const About = () => {
  return (
    <BackgroundContainer>
      <AboutContainer>
        <AboutTitle>Sobre Maruja</AboutTitle>
        <ContentContainer>
          <Image alt="feed-image" key="maruja" src="/assets/Maruja-About.jpg" placeholderSrc={reusablePlaceholder} />
          <TextContainer>
            <MobileHeartIcon src="/assets/Heart.svg" />
            <MobileAboutTitle>Sobre Maruja</MobileAboutTitle>
            <AboutDescription>
              Maruja nace cómo un emprendimiento personal inspirado en mi abuela; <strong> María Mahia de Ares</strong>.
              ¿Quién fue Maruja? Una mujer simple, amable, con mucha energía sobre todas las cosas, andaba de un lado
              para el otro siempre con una sonrisa.
            </AboutDescription>
            <AboutMobile>
              Maruja nace cómo un emprendimiento personal inspirado en mi abuela; <strong> María Mahia de Ares</strong>
              ...
            </AboutMobile>
            <Button text="Quien fue Maruja?" url="/aningunlado" />
          </TextContainer>
        </ContentContainer>
      </AboutContainer>
    </BackgroundContainer>
  );
};

export default About;
