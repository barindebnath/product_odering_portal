// mui
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

// local
import Topnav from "./components/Topnav";
import LeftMenu from "./components/LeftMenu";
import CenterContent from './components/CenterContent';

const App = () => {
  const sx = styles();

  return (
    <div>
      <Topnav />
      <Box sx={sx.outerBox}>
        <Grid
          sx={sx.container}
          container
        >
          <Grid item sx={sx.leftContent}>
            <LeftMenu />
          </Grid>

          <Grid item xs sx={sx.centerContent} >
            <CenterContent />
          </Grid>
        </Grid>
      </Box>
    </div>

  );
}

export default App;

const styles = () => ({
  outerBox: {
    backgroundColor: '#edf6ff',
    py: 4,
    minHeight: 'calc(100vh - 64px - 32px - 32px )',
  },
  container: {
    maxWidth: '1440px',
    mx: 'auto',
    px: 3,
    gap: 3,
  },
  leftContent: {
    minWidth: '250px',
  },
  centerContent: {
    overflowX: 'hidden',
  },
});