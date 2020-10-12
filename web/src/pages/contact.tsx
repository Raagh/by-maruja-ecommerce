import React from 'react';
import styled from 'styled-components';
import { sanity } from '../../lib/sanity';

import Layout from '../components/shared/layout';
import { CategoryConfiguration } from '../model/category-configuration';

const ContactPageContainer = styled.section`
`;

const ContactPage = ({ categories }: { categories: Array<CategoryConfiguration> }) => {
  return (
    <Layout categories={categories}>
      <ContactPageContainer>
      </ContactPageContainer>
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

export default ContactPage;
