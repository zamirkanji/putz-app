import React from "react";
import { ThemeProvider } from "styled-components";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { HeaderContainer } from "../../styles/components/Header/Header.styled";
import { IconSun, IconMoonStars } from '@tabler/icons';
import { useState } from "react";
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
    color: 'white',
    cursor: 'pointer'
  },
  p: {
    color: '#CCC9DC'
  },
  iconContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '10px'
  },
  accountIcon: {
    cursor: 'pointer'
  }
}



type HeaderProps = {
    toggleTheme: any
}

function Header({toggleTheme}: HeaderProps) {
    const [theme, setTheme] = useState();


    const handleChange = () => {
        console.log('test');
        const theme = toggleTheme();
        setTheme(theme);
    }
    
    return (
        <HeaderContainer>
            <ThemeProvider theme={lightTheme}>
                <header>
                    <Link href='/'><h1>Putz</h1></Link>
                    <p>Markets, stocks, options, watchlists...</p>
                </header>
                <div style={styles.iconContainer}>
                    <AccountCircleIcon style={styles.accountIcon}/>
                    {theme === 'Dark' ? <IconMoonStars onClick={handleChange} /> : <IconSun onClick={handleChange} />}
                    
                </div>
            </ThemeProvider>
        </HeaderContainer>
    )
}

export default Header