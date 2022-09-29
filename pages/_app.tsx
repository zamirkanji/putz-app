import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from '../styles/components/Theme/theme';
import Header from '../components/Header/Header';

function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState('Dark');

  const toggleTheme = () => {
    theme == 'Dark' ? setTheme('Light') : setTheme('Dark');
  }

  return (
    <ThemeProvider theme={theme == 'Dark' ? darkTheme : lightTheme}>
      <Header onclick={toggleTheme} />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
