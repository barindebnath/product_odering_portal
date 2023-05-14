import { useDispatch, useSelector } from "react-redux";

// mui
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Typography from '@mui/material/Typography';

// local
import Categories from './Categories';
import Products from "./Products";
import SubCategories from "./SubCategories";
import { RootState } from "../../redux/store";
import { setSubCategory } from "../../redux/reducers/subCategory";

const Index = () => {
  const sx = styles();
  const activeSubCategory = useSelector<RootState, string>(state => state.subCategory);
  const dispatch = useDispatch()

  return (
    <Box sx={sx.mainContent}>
      {activeSubCategory ? (
        <Grid alignItems="center" container>
          <IconButton onClick={() => dispatch(setSubCategory(''))}>
            <ArrowBackIcon />
          </IconButton>

          <Typography variant="h5">
            All Products
          </Typography>
        </Grid>
      ) : (
        <Typography variant="h5">
          Print heads
        </Typography>
      )}

      <Categories />

      <SubCategories />

      <Products />

    </Box>
  )
}

export default Index;


const styles = () => ({
  mainContent: {
    background: '#FFFFFF',
    padding: 2,
    borderRadius: '8px',
    minHeight: '100%',
  },
});