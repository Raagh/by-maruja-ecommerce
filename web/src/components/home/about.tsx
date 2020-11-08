import React from 'react';
import styled from 'styled-components';
import LazyLoadImage from '../shared/image-types/lazy-image';
import { reusablePlaceholder, device } from '../../config/device';
import { StyledH3, BodyCopyRegularSmall } from '../../config/global-styled-components';
import Button from '../shared/secondary-button';
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
    object-fit: cover;
    max-width: 491px;
  }
`;

const MobileAboutTitle = styled(StyledH3)`
  padding-top: 4rem;
  @media ${device.large} {
    padding-top: 0;
    padding-bottom: 3rem;
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
  margin-right: 1.5rem;
  margin-left: 1.5rem;

  @media ${device.large} {
    max-width: 40%;
    margin: auto;
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

const About = () => {
  return (
    <BackgroundContainer>
      <AboutContainer>
        <ContentContainer>
          <Image alt="feed-image" key="maruja" src="/assets/Maruja-About.jpg" placeholderSrc={reusablePlaceholder} />
          <TextContainer>
            <MobileAboutTitle>Sobre Maruja</MobileAboutTitle>
            <AboutDescription>
              Maruja nace cómo un emprendimiento personal inspirado en mi abuela; <strong>María Mahia de Ares</strong>.
              ¿Quién fue Maruja? Una mujer simple, amable, con mucha energía sobre todas las cosas, andaba de un lado
              para el otro siempre con una sonrisa.
            </AboutDescription>
            <AboutMobile>
              Maruja nace cómo un emprendimiento personal inspirado en mi abuela; <strong> María Mahia de Ares</strong>
              ...
            </AboutMobile>
            <Button text="¿Quién fue Maruja?" url="/about" />
          </TextContainer>
        </ContentContainer>
      </AboutContainer>
    </BackgroundContainer>
  );
};

export default About;
