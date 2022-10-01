import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, iconTheme } from '../../styles/components/Theme/theme';
import Link from 'next/link';
import ListIcon from '@mui/icons-material/List';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import { NavbarContainer } from '../../styles/components/Navbar/Navbar.styled';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import styles from '../../styles/components/Navbar/Navbar.module.css'

const Navbar = () => {
    return (
        <NavbarContainer>
            <ThemeProvider theme={lightTheme}>
                <Link href="/account" className={styles.icon}>
                    <ThemeProvider theme={iconTheme}>
                        <AccountCircleIcon>
                        </AccountCircleIcon>
                    </ThemeProvider>
                </Link>
                <Link href="/market" className={styles.icon}>
                    <ThemeProvider theme={iconTheme}>
                        <TrendingDownIcon>
                        </TrendingDownIcon>
                    </ThemeProvider>
                </Link>
                <Link href="/home" className={styles.icon}>
                    <ThemeProvider theme={iconTheme}>
                        <HomeIcon>
                        </HomeIcon>
                    </ThemeProvider>
                </Link>
                <Link href="/watchlist" className={styles.icon}>
                    <ThemeProvider theme={iconTheme}>
                        <ListIcon>
                        </ListIcon>
                    </ThemeProvider>
                </Link>
                <Link href="/search" className={styles.icon}>
                    <ThemeProvider theme={iconTheme}>
                        <SearchIcon>
                        </SearchIcon>
                    </ThemeProvider>
                </Link>
            </ThemeProvider>
        </NavbarContainer>
    )
}

export default Navbar