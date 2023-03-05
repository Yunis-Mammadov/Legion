import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { Link } from 'react-router-dom';

const page1 = ['Setlər'];
const page2 = ['Yeməklər'];
const page3 = ['İçkilər'];


function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    
    

    <AppBar position="static">

        <Toolbar sx={{

         background: 'linear-gradient(to right, #2c387e, #9c2caf)'
        }} >


          {/* bar */}



            <Box  sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' },justifyContent:'center' }}>
              {page1.map((page) => (
                <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
                >
                {page}
              </Button>
            ))}
          </Box>

            {/* bar */}
          
          
          
          <Box sx={{flexGrow: 1 ,display: { xs: 'flex', md: 'none' } }}>
            
            
            
            {/* responsive bar*/}
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
              >
              <MenuIcon />
            </IconButton>
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
              {page1.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Link to="/setler">Setlər</Link>
                </MenuItem>
              ))}
              {page2.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Link to="/yemekler">Yeməklər</Link>
                </MenuItem>
              ))}
              {page3.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Link to="/ickiler">İçkilər</Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
              {/* responsive bar */}


              {/* // <Link to="/yemekler">u</Link>
              // <Link to="/ickiler">d</Link> */}

            {/* responsive legion */}
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
            >
            Legion
          </Typography>
              {/* responsive legion*/}
         
        </Toolbar>
    </AppBar>
  );
}
export default Navbar;