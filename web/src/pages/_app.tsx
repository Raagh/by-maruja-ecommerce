import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import type { AppProps } from 'next/app';
import { StateProvider } from '../context/store';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StateProvider>
      <Component {...pageProps} />
    </StateProvider>
  );
}

export default MyApp;
