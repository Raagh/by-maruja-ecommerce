import Head from 'next/head';
import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { globalStyles } from '../../config/globalstyles';
import NavBar from './navBar';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100vh;
  }

  @font-face {
    font-family: ${globalStyles.primaryFontName};
    src: url('/fonts/Ortica-Light.woff') format("woff");
  }

  @font-face {
    font-family: ${globalStyles.secondaryFontName};
    src: url('/fonts/Mr-Eaves-XL-Modern.woff') format("woff");
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const Layout = ( props : any) => {
    return (
        <div>
            <GlobalStyle />
            <Head>
                <title>By Maruja</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <NavBar/>
            {props.children}
        </div>
    );
  };

export default Layout;
