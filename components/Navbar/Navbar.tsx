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
                <ThemeProvider theme={iconTheme}>
                    <Link href="/account">
                            <AccountCircleIcon className={styles.icon}>
                            </AccountCircleIcon>
                    </Link>
                </ThemeProvider>

                <ThemeProvider theme={iconTheme}>
                    <Link href="/market">
                        <TrendingDownIcon className={styles.icon}>
                        </TrendingDownIcon>
                    </Link>
                </ThemeProvider>

                <ThemeProvider theme={iconTheme}>
                    <Link href="/">
                        <HomeIcon className={styles.icon}>
                        </HomeIcon>
                    </Link>
                </ThemeProvider>
                <ThemeProvider theme={iconTheme}>
                    <Link href="/watchlist">
                        <ListIcon className={styles.icon}>
                        </ListIcon>
                    </Link>
                </ThemeProvider>
                <ThemeProvider theme={iconTheme}>
                    <Link href="/search">
                        <SearchIcon className={styles.icon}>
                        </SearchIcon>
                    </Link>
                </ThemeProvider>
            </ThemeProvider>
        </NavbarContainer>
    )
}

export default Navbar