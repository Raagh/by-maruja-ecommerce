import React from 'react';
import Layout from '../components/shared/layout';
import Hero from '../components/home/hero';
import { sanity } from '../../lib/sanity';

const Home = ({ hero }: any) => {
  return (
    <Layout>
      <Hero title={hero.title} subtitle={hero.subtitle} image={hero.image} />
    </Layout>
  );
};

Home.getInitialProps = async () => {
  return sanity.fetch(
    `
    *[_type == "homeSettings"][0]{hero}
  `
  );
};

export default Home;
