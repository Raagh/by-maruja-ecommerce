import React from 'react';
import Layout from '../components/shared/layout';
import Hero from '../components/home/hero';
import ShippingInfo from '../components/home/shipping-info';
import { sanity } from '../../lib/sanity';
import { HeroConfiguration } from '../model/hero-configuration';

const Home = ({ hero }: { hero: HeroConfiguration }) => {
  return (
    <Layout>
      <Hero title={hero.title} subtitle={hero.subtitle} image={hero.image} buttonText={hero.buttonText} buttonURL={hero.buttonURL} />
      <ShippingInfo />
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
