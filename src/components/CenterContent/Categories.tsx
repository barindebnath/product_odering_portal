import React from 'react';

// mui
import Grid from "@mui/material/Grid";
import Skeleton from '@mui/material/Skeleton';
import Typography from '@mui/material/Typography';

// local
import useCategory from '../../hooks/useCategory';
import defaultImage from '../../logo.svg';

type Props = {

}
const Categories = (props: Props) => {
  const sx = styles();
  const { isLoading, isError, categories } = useCategory();
  console.log(props)
  return (
    <div>
      <Grid
        sx={sx.container}
        container
        wrap="nowrap"
        direction="row"
      >
        {isError ? (
          <Typography>
            Someting went wrong!!!
            {isError}
          </Typography>
        ) : isLoading ? (
          <Skeleton variant="rectangular" width={130} height={130} />
        ) : categories ? categories.length ? categories.map((category) => (
          <Grid
            item
            key={category.categoryId}
            sx={sx.category}
            title={category.categoryName}
          >
            <img
              src={category.categoryImageURL || defaultImage}
              alt={category.categoryName}
            />
          </Grid>
        )) : (
          <Typography>
            No categories found
          </Typography>
        ) : null}
      </Grid>
    </div>
  )
}

export default React.memo(Categories);

const styles = () => ({
  container: {
    mt: 2,
    overflowX: 'auto',
    overflowY: 'hidden',
    width: '100%',
  },
  category: {
    height: '130px',
    minWidth: '130px',
    my: 1,
    mx: 2,
    cursor: 'pointer',
    borderRadius: '12px',
    border: '2px solid transparent',
    padding: 0.5,
    '& img': {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      objectPosition: 'center',
    },
    '&:hover': {
      borderColor: '#ff9d9d',
    },
  },
});