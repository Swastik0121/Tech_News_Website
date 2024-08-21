import * as React from 'react';
import { useLocation } from 'react-router-dom';
import {AppBar, Box, Toolbar, Typography, Menu, Container, Button, MenuItem} from '@mui/material';
import PublicIcon from '@mui/icons-material/Public';

const pages = ['Mobile Phone', 'PC', 'Console', 'About'];

const pageLinks = {
  'Mobile Phone': '/mobile-phone',
  'PC': '/pc',
  'Console': '/console',
  'About': '/about'
};

function Navbar() {
  const location = useLocation(); //to get the current location
  const [scrollPosition, setScrollPosition] = React.useState(0);
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  React.useEffect(()=>{
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  },[]);
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <>
      <AppBar position="sticky" sx={{ backgroundColor: scrollPosition > 0 ? 'rgba(255, 80, 1, 0.8)' : '#ff5001', transition: 'background-color 0.3s ease-in-out'}}>
        <Container maxWidth='xl'>
          <Toolbar disableGutters>
            <PublicIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, color: 'white' }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/home"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.2rem',
                color: 'white',
                textDecoration: 'none',
                fontSize:'20px'
              }}
            >
              TechTrends
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu} href={pageLinks[page]}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <PublicIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="/home"
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'white',
                textDecoration: 'none',
              }}
            >
              TechTrends
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu }
                  href={pageLinks[page]}
                  sx={{ my: 2, 
                    color: 'white', 
                    display: 'block', backgroundColor: location.pathname === pageLinks[page] ? 'black' : 'inherit'}}
                >
                  <Typography textAlign="center">{page}</Typography>
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}
export default Navbar;