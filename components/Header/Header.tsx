// import { HeaderContainer } from "../styled/Container.styled";
// import { Switch } from '@mui/material';
import React from "react";
import { ThemeProvider } from "styled-components";
// import { darkTheme, headerTheme } from "../styled/theme";
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Link from "next/link";
import { useState } from "react";
import { type } from "os";
import { darkTheme } from "../../styles/components/Theme/theme";

const styles: {[key: string]: React.CSSProperties} = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px'
  },
  h1: {
    color: 'white'
  },
  p: {
    color: '#CCC9DC'
  },
  iconContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  accountIcon: {
    cursor: 'pointer'
  }
}


type HeaderProps = {
    onclick: any
}

function Header({onclick}: HeaderProps) {

  return (
    <ThemeProvider theme={darkTheme}>
        <header>
            <h1><Link href='/home'>Putz</Link></h1>
            <p>Markets, stocks, options, watchlists...</p>
        </header>
        <div style={styles.iconContainer}>
            {/* <AccountCircleIcon style={styles.accountIcon} className='accountIcon' onClick={handleAccountClick} />
            <Switch 
                    onChange={handleChange}
                    inputProps={{ 'aria-label': 'controlled' }}/> */}
        </div>
    </ThemeProvider>
  )
}

export default Header