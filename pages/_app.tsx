import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { darkTheme, GlobalStyles, lightTheme } from '../styles/components/Theme/theme';
import Header from '../components/Header/Header';
import Navbar from '../components/Navbar/Navbar';

function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState('Dark');

  const toggleTheme = () => {
    theme == 'Dark' ? setTheme('Light') : setTheme('Dark');
    return theme;
  }

  return (
    <ThemeProvider theme={theme == 'Dark' ? darkTheme : lightTheme}>
      <GlobalStyles />
      <Header toggleTheme={toggleTheme} />
      <Component {...pageProps} />
      <Navbar />
    </ThemeProvider>
  )
}

export default MyApp
