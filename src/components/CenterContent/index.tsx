// mui
import Grid from "@mui/material/Grid";

// local
import Categories from './Categories';

const Index = () => {
  const sx = styles();

  return (
    <Grid container sx={sx.container}>
      <Grid xs={8} item sx={sx.mainContent}>
        ** HEADER **

        <Categories />


      </Grid>

      <Grid item xs sx={sx.rightContent}>
        right content
      </Grid>
    </Grid>
  )
}

export default Index;


const styles = () => ({
  container: {
    gap: 3,
    height: '100%',
  },
  mainContent: {
    background: '#FFFFFF',
    padding: 2,
    borderRadius: '8px',
  },
  rightContent: {
    background: '#FFFFFF',
    padding: 2,
    borderRadius: '8px',
  },
});