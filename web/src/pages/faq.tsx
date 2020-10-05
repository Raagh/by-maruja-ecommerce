import React from 'react';
import styled from 'styled-components';
import { sanity } from '../../lib/sanity';

import Faq from '../components/shared/faq';
import Layout from '../components/shared/layout';
import { CategoryConfiguration } from '../model/category-configuration';
import { StyledH3 } from '../config/global-styled-components';

const LinkContainer = styled.div`
  text-align: center;
`;

const FaqPage = ({ categories }: { categories: Array<CategoryConfiguration> }) => {
  return (
    <Layout categories={categories}>
      <Faq />
      <LinkContainer>
        <StyledH3>Ver más</StyledH3>
      </LinkContainer>
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
