// mui
import Box from "@mui/material/Box";

// local
import Categories from './Categories';
import Products from "./Products";
import SubCategories from "./SubCategories";

const Index = () => {
  const sx = styles();

  return (
    <Box sx={sx.mainContent}>
      ** HEADER **

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