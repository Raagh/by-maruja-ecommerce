import React from 'react';
import 'react-multi-carousel/lib/styles.css';
import '../config/fonts.css';
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
