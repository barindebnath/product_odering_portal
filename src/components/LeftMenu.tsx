import React from 'react';

// mui
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from '@mui/material/Typography';
import DashboardIcon from '@mui/icons-material/Dashboard';
import CategoryIcon from '@mui/icons-material/Category';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import FavoriteIcon from '@mui/icons-material/Favorite';
import NewReleasesIcon from '@mui/icons-material/NewReleases';

// local
import logo from '../logo.svg';

const LeftMenu = () => {

  return (
    <Box sx={sx.container}>
      <Box sx={sx.logoBox}>
        <img src={logo} className="logo" alt="logo" />
        <Typography variant="h6" >
          A.T.Inks
        </Typography>
      </Box>

      <Box sx={sx.menuItems}>
        {menuItems.map((item) => (
          <Grid
            key={item.id}
            container
            alignItems="center"
            sx={sx.menuitem(Boolean(item.disabled), Boolean(item.active))}
          >
            <Box sx={sx.iconWrapper}>
              {item.icon}
            </Box>
            <Typography fontWeight={500}>
              {item.title}
            </Typography>
          </Grid>
        ))}
      </Box>
    </Box >
  )
}

export default React.memo(LeftMenu);

const menuItems: {
  id: number;
  title: string;
  icon: JSX.Element;
  disabled?: boolean;
  active?: boolean;
}[] = [{
  id: 1,
  title: 'Dashboard',
  icon: <DashboardIcon />,
  disabled: true,
}, {
  id: 2,
  title: 'All Products',
  icon: <CategoryIcon />,
  active: true,
}, {
  id: 3,
  title: 'Orders',
  icon: <LocalMallIcon />,
  disabled: true,
}, {
  id: 4,
  title: 'Favorites',
  icon: <FavoriteIcon />,
  disabled: true,
}, {
  id: 5,
  title: 'New Arrival',
  icon: <NewReleasesIcon />,
  disabled: true,
}];

const sx = {
  container: {
    background: '#FFFFFF',
    padding: 2,
    borderRadius: '8px',
    height: '100%',
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
  menuItems: {
    mt: 4,
  },
  menuitem: (isDisabled: boolean, isActive: boolean) => ({
    py: 2,
    px: 3,
    color: isDisabled ? 'grey' : isActive ? 'red' : 'black',
    backgroundColor: isActive ? '#ffeeee' : 'transparent',
    borderRadius: '6px',
  }),
  iconWrapper: {
    mr: 3,
  },
};