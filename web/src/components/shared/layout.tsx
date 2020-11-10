import Head from 'next/head';
import React, { FunctionComponent } from 'react';
import { NextSeo } from 'next-seo';
import styled, { createGlobalStyle } from 'styled-components';

import NavBar from './navbar/navbar';
import Footer from './footer/footer';
import { CategoryConfiguration } from '../../model/category-configuration';
import { colors } from '../../config/global-styles';
import SEO from '../../../next-seo.config';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100vh;
    scroll-behavior:smooth;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const Main = styled.main`
  background-color: ${colors.ui.whiteBackground};
`;

type LayoutProps = {
  categories: CategoryConfiguration[];
};

const Layout: FunctionComponent<LayoutProps> = (props) => {
  return (
    <Main>
      <NextSeo title={SEO.title} description={SEO.description} openGraph={SEO.openGraph} twitter={SEO.twitter} />
      <GlobalStyle />
      <Head>
        <title>By Maruja</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar categories={props.categories} />
      {props.children}
      <Footer />
    </Main>
  );
};

export default Layout;
