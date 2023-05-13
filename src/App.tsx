// mui
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

// local
import Topnav from "./components/Topnav";
import LeftMenu from "./components/LeftMenu";
import CenterContent from './components/CenterContent';
import BottomContent from "./components/BottomContent";
import AddProductModal from "./components/AddProductModal";

const App = () => {
  const sx = styles();

  return (
    <div>
      <Topnav />
      <Box sx={sx.outerBox}>
        <Grid container sx={sx.container}>
          <Grid xs item sx={sx.leftCenterContnet}>
            <Grid sx={sx.leftCenterContainer} container>
              <Grid item sx={sx.leftContent}>
                <LeftMenu />
              </Grid>

              <Grid item xs sx={sx.centerContent} >
                <CenterContent />
              </Grid>

              <BottomContent />
            </Grid>
          </Grid>

          <Grid item xs={3} sx={sx.rightContent}>
            right content
          </Grid>
        </Grid>
      </Box>
      <AddProductModal />
    </div>

  );
}

export default App;

const styles = () => ({
  outerBox: {
    backgroundColor: '#edf6ff',
    py: 4,
    minHeight: 'calc(100vh - 64px)',
  },
  container: {
    maxWidth: '1440px',
    gap: 3,
    height: '100%',
    px: 3,
    mx: 'auto',
  },
  leftCenterContnet: {
    overflowX: 'hidden',
  },
  leftCenterContainer: {
    gap: 3,
  },
  leftContent: {
    minWidth: '250px',
    minHeight: '100%',
  },
  centerContent: {
    overflowX: 'hidden',
  },
  rightContent: {
    background: '#FFFFFF',
    padding: 2,
    borderRadius: '8px',
  },
});