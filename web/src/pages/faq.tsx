import React from 'react';
import styled from 'styled-components';
import { sanity } from '../../lib/sanity';
import Link from 'next/link';

import Layout from '../components/shared/layout';
import TopicSelector from '../components/shared/topic-selector';
import jsonData from '../config/faq-page-conf.json';
import { CategoryConfiguration } from '../model/category-configuration';
import { StyledH3Title, BodyCopyBoldSmall, BodyCopyRegularSmall } from '../config/global-styled-components';
import { colors } from '../config/global-styles';
import { device } from '../config/device';

const FaqPageContainer = styled.section`
  @media ${device.large} {
    text-align: center;
  }
`;
const AboutLinkContainer = styled.div`
  text-align: center;
  margin-top: 2rem;
`;
const AboutCallToAction = styled(BodyCopyRegularSmall)`
  font-size: 16px;
`;
const AboutLink = styled(BodyCopyBoldSmall)`
  text-decoration: underline;
`;

const FaqPageTitle = styled(StyledH3Title)`
  text-align: center;
  background: ${colors.ui.grey5percent};
  padding: 4rem 1.5rem 4rem 1.5rem;
`;

const SelectorsContainer = styled.div`
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  :hover {
    cursor: pointer;
  }
  padding: 0 1.5rem 0 1.5rem;
  @media ${device.large} {
    display: flex;
    width: 880px;
    margin: 4rem auto 3.5rem auto;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;

const FaqPage = ({ categories }: { categories: Array<CategoryConfiguration> }) => {
  return (
    <Layout categories={categories}>
      <FaqPageContainer>
        <FaqPageTitle>
          Preguntas
          <br />
          Frecuentes
        </FaqPageTitle>
        <SelectorsContainer>
          {jsonData.map((topic) => (
            <TopicSelector key={topic.Topic} selection={topic} />
          ))}
        </SelectorsContainer>
        <AboutLinkContainer>
          <AboutCallToAction>No encontrás la respuesta que buscás?</AboutCallToAction>
          <Link href="/">
            <AboutLink>Contactanos aquí</AboutLink>
          </Link>
        </AboutLinkContainer>
      </FaqPageContainer>
    </Layout>
  );
};

export const getServerSideProps = async () => {
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

export default FaqPage;
