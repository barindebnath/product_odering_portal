import React from 'react';

// mui
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

// local
import logo from '../logo.svg';

const Topnav = () => {
  const sx = styles();

  return (
    <Box sx={sx.container}>
      <AppBar
        sx={sx.appbar}
        position="static"
      >
        <Toolbar>
          <Box sx={sx.logoBox}>
            <img src={logo} className="logo" alt="logo" />
            <Typography variant="h6" >
              A.T.Inks
            </Typography>
          </Box>

          <Box sx={sx.centerContent} />

          <Box sx={sx.rightContent} />
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default React.memo(Topnav);

const styles = () => ({
  container: {
    flexGrow: 1,
    backgroundColor: '#FFFFFF',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    position: 'relative',
  },
  appbar: {
    maxWidth: '1440px',
    margin: 'auto',
    backgroundColor: '#FFFFFF',
    color: '#000000',
    boxShadow: 'none',
  },
  logoBox: {
    mr: 2,
    display: 'flex',
    alignItems: 'center',
    '& .logo': {
      height: '40px',
      width: 'auto',
    },
  },
  centerContent: {
    flexGrow: 1,
    width: '200px',
    height: '40px',
    backgroundColor: '#c5c5c5',
  },
  rightContent: {
    ml: 2,
    width: '200px',
    height: '40px',
    backgroundColor: '#c5c5c5',
  },
});