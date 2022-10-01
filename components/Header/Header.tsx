import React from "react";
import { ThemeProvider } from "styled-components";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { HeaderContainer } from "../../styles/components/Header/Header.styled";
import { IconSun, IconMoonStars } from '@tabler/icons';
import Link from "next/link";
import { darkTheme, lightTheme } from "../../styles/components/Theme/theme";
import { Switch } from "@mui/material";

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
    toggleTheme: any
}

function Header({toggleTheme}: HeaderProps) {
    const handleChange = () => {
        console.log('test');
        toggleTheme();
    }
    
    return (
        <HeaderContainer>
            <ThemeProvider theme={lightTheme}>
                <header>
                    <h1><Link href='/home'>Putz</Link></h1>
                    <p>Markets, stocks, options, watchlists...</p>
                </header>
                <div style={styles.iconContainer}>
                    <AccountCircleIcon style={styles.accountIcon}/>
                    <IconMoonStars onClick={handleChange} />
                </div>
            </ThemeProvider>
        </HeaderContainer>
    )
}

export default Header