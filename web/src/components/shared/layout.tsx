import Head from 'next/head';
import React, { FunctionComponent } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { fonts, colors } from '../../config/global-styles';

import NavBar from './navbar';
import Footer from './footer/footer';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100vh;
  }

  @font-face {
    font-family: ${fonts.primary.name};
    src: url('/fonts/Ortica-Light.woff') format("woff");
    font-display: swap;
  }

  @font-face {
    font-family: ${fonts.secondary.regular.name};
    src: url('/fonts/Proxima-Nova.woff') format("woff");
    font-display: swap;
  }

  @font-face {
    font-family: ${fonts.secondary.bold.name};
    src: url('/fonts/Proxima-Nova-Bold.woff') format("woff");
    font-display: swap;
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

const Layout: FunctionComponent = (props) => {
  return (
    <Main>
      <GlobalStyle />
      <Head>
        <title>By Maruja</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      {props.children}
      <Footer />
    </Main>
  );
};

export default Layout;
