import React from 'react';
import styled from 'styled-components';

import { sanity } from '../../lib/sanity';

import Layout from '../components/shared/layout';
import { device, reusablePlaceholder } from '../config/device';
import { BodyCopyRegularSmall, StyledH3Title, StyledH4Title } from '../config/global-styled-components';
import { colors } from '../config/global-styles';
import LazyLoadImage from '../components/shared/image-types/lazy-image';

import { CategoryConfiguration } from '../model/category-configuration';
import IconListItem from '../components/shared/icon-list-item';

const AboutPageContainer = styled.section``;

const CenteredContainer = styled.section`
  max-width: 1600;
  margin: auto;
  width: 100%;

  @media ${device.large} {
    width: 50%;
    padding-top: 2rem;
  }
`;

const AboutTextContainer = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const CategoryHeader = styled(StyledH3Title)`
  text-align: center;
  padding: 4rem 1.5rem 4rem 1.5rem;
  background-color: ${colors.ui.grey5percent};
`;

const Image = styled(LazyLoadImage)`
  width: 100%;
  @media ${device.large} {
    max-width: 50%;
    object-fit: cover;
  }
`;

const UpperText = styled(BodyCopyRegularSmall)`
  padding: 2rem 1.5rem 2.5rem 1.5rem;

  @media ${device.large} {
    padding: 3rem;
  }
`;

const LowerText = styled(BodyCopyRegularSmall)`
  padding: 2.5rem 1.5rem 3.5rem 1.5rem;

  @media ${device.large} {
    padding: 3rem;
  }
`;

const BuyMarujaContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  @media ${device.large} {
    margin: 0 3rem 3rem 3rem;
    padding: 3rem 4rem 2rem 4rem;
    background-color: ${colors.ui.grey5percent};
  }
`;

const ByMarujaTitle = styled(StyledH4Title)`
  text-align: center;
  @media ${device.small} {
    padding: 0 2rem 0 2rem;
  }
`;

const BuyMarujaBenefits = styled.article`
  padding: 3rem 0 2rem 0;

  @media ${device.small} {
    padding: 3rem 1.5rem 0 1.5rem;
  }
`;

const StyledIconListItem = styled(IconListItem)<{ removePadding: boolean }>`
  ${(props) => (props.removePadding ? '' : 'padding-bottom: 3rem')};
`;

const AboutPage = ({ categories }: { categories: Array<CategoryConfiguration> }) => {
  return (
    <Layout categories={categories}>
      <AboutPageContainer>
        <CategoryHeader>Sobre Maruja</CategoryHeader>
        <CenteredContainer>
          <AboutTextContainer>
            <UpperText>
              Maruja nace cómo un emprendimiento personal inspirado en mi abuela; María Mahia de Ares... ¿Quién fue
              Maruja? Una mujer simple, amable, con mucha energía sobre todas las cosas, andaba de un lado para el otro
              siempre con una sonrisa. Te animaba siempre a no preocuparte, a no hacerte problema por las cosas...
            </UpperText>
            <Image alt="feed-image" key="maruja" src="/assets/Maruja-About.jpg" placeholderSrc={reusablePlaceholder} />
            <LowerText>
              Hoy Maruja lorem ipusm nace cómo un emprendimiento personal inspirado en uién fue Maruja? Una mujer
              simple, amable, con mucha energía sobre todas las cosas, andaba de un lado para el otro siempre con una
              sonrisa. Te animaba siempre a no preocuparte, a no hacerte problema.
            </LowerText>
          </AboutTextContainer>
          <BuyMarujaContainer>
            <ByMarujaTitle>Comprar en Maruja significa...</ByMarujaTitle>
            <BuyMarujaBenefits>
              <StyledIconListItem
                removePadding={false}
                image="/assets/Contact.svg"
                text="Comprar a un emprendimiento Lorem ipsum dolor Mercado Envíos a toda la Argentina"
                alt="beneficio"
                key={1}
              />

              <StyledIconListItem
                removePadding={false}
                image="/assets/Contact.svg"
                text="Comprar a industria nacional  (?) lorem ipsum Corar a industria nacional  (?) lorem ipsum"
                alt="beneficio"
                key={2}
              />

              <StyledIconListItem
                removePadding={true}
                image="/assets/Contact.svg"
                text="Comprar a industria nacional  (?) lorem ipsum"
                alt="beneficio"
                key={3}
              />
            </BuyMarujaBenefits>
          </BuyMarujaContainer>
        </CenteredContainer>
      </AboutPageContainer>
    </Layout>
  );
};

export const getStaticProps = async () => {
  const sanityResult = await sanity.fetch(
    `
      *[_type == "homeSettings"][0]{
        "categories": categories[]->{
          searchName,
          name,
          image,
          "asset": image.asset-> {
            url,
            metadata 
         }
        },
       }
    `
  );
  return { props: { ...sanityResult } };
};

export default AboutPage;
