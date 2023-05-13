
// mui
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

// local
import Topnav from "./components/Topnav";
import LeftMenu from "./components/LeftMenu";

const App = () => {
  const sx = styles();

  return (
    <div>
      <Topnav />
      <Box sx={sx.outerBox}>
        <Grid
          sx={sx.container}
          container
          // columnSpacing={3}
        >
          <Grid
            item
            sx={sx.leftContent}
          >
            <LeftMenu />
          </Grid>

          <Grid
            item
            xs
            sx={sx.centerContent}
          >
            center content
          </Grid>

          <Grid
            item
            xs={4}
            sx={sx.rightContent}
          >
            right content
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
    px: 4,
  },
  container: {
    maxWidth: '1440px',
    margin: 'auto',
    gap: 3,
  },
  leftContent: {
    minWidth: '300px',
  },
  centerContent: {

  },
  rightContent: {

  },
});