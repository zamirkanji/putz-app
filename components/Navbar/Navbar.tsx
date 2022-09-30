import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, iconTheme } from '../../styles/components/Theme/theme';
import Link from 'next/link';
import ListIcon from '@mui/icons-material/List';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import { NavbarContainer } from '../../styles/components/Navbar/Navbar.styled';


const Navbar = () => {
    return (
        <NavbarContainer>
            <ThemeProvider theme={lightTheme}>
                <Link href="/watchlist">
                    <ThemeProvider theme={iconTheme}>
                        <ListIcon>
                        </ListIcon>
                    </ThemeProvider>
                </Link>
                <Link href="/watchlist">
                    <HomeIcon>
                    </HomeIcon>
                </Link>
                <Link href="/watchlist">
                    <SearchIcon>
                    </SearchIcon>
                </Link>
            </ThemeProvider>
        </NavbarContainer>
    )
}

export default Navbar