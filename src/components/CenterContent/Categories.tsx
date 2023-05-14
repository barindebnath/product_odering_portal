import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

// mui
import Grid from "@mui/material/Grid";
import Skeleton from '@mui/material/Skeleton';
import Typography from '@mui/material/Typography';

// local
import useCategory from '../../hooks/useCategory';
import defaultImage from '../../logo.svg';
import { RootState } from '../../redux/store';
import { setCategory } from '../../redux/reducers/category';

const Categories = () => {
  const sx = styles();
  const activeCategory = useSelector<RootState, string>(state => state.category);
  const activeSubCategory = useSelector<RootState, string>(state => state.subCategory);
  const dispatch = useDispatch();
  const { isLoading, isError, categories } = useCategory();

  return (
      <Grid
        sx={sx.container}
        container
        wrap="nowrap"
        direction="row"
        display={activeSubCategory ? 'none' : 'flex'}
      >
        {isError ? (
          <Typography>
            Someting went wrong!!!
          </Typography>
        ) : isLoading ? (
          <Skeleton variant="rectangular" width={130} height={130} />
        ) : categories ? categories.length ? categories.map((category) => (
          <Grid
            item
            key={category.categoryId}
            sx={sx.category(activeCategory === category.categoryId)}
            title={category.categoryName}
            onClick={() => dispatch(setCategory(category.categoryId))}
          >
            <img
              src={category.categoryImageURL || defaultImage}
              alt=''
              onError={(e)=>{
                (e.target as HTMLImageElement).src = defaultImage;
              }}
            />
            <Typography sx={sx.categoryTitle}>
              {category.categoryName}
            </Typography>
          </Grid>
        )) : (
          <Typography>
            No categories found
          </Typography>
        ) : null}
      </Grid>
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
  category: (isActive:boolean) => ({
    height: '130px',
    minWidth: '130px',
    width: '130px',
    my: 1,
    mx: 1,
    cursor: 'pointer',
    borderRadius: '12px',
    border: '2px solid transparent',
    padding: 0.5,
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    borderColor: isActive ? 'red' : 'transparent',
    '& img': {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      objectPosition: 'center',
    },
    '&:hover': {
      borderColor: isActive ? 'red' : '#ff9d9d',
    },
  }),
  categoryTitle:{
    fontSize: '13px',
    color: '#b1b1b1',
    position: 'absolute',
    bottom: '2px',
    fontWeight: 500,
  },
});