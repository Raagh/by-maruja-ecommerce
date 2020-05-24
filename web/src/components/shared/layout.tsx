import Head from 'next/head';
import React, { FunctionComponent } from 'react';
import { createGlobalStyle } from 'styled-components';
import { fonts } from '../../config/global-styles';
import NavBar from './navBar';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100vh;
  }

  @font-face {
    font-family: ${fonts.primary.name};
    src: url('/fonts/Ortica-Light.woff') format("woff");
  }

  @font-face {
    font-family: ${fonts.secondary.name};
    src: url('/fonts/Mr-Eaves-XL-Modern.woff') format("woff");
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const Layout: FunctionComponent = (props) => {
  return (
    <div>
      <GlobalStyle />
      <Head>
        <title>By Maruja</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      {props.children}
    </div>
  );
};

export default Layout;
