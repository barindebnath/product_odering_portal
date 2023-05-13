import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

// mui
import Grid from "@mui/material/Grid";
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';

// local
import useSubCategory from '../../hooks/useSubCategory';
import defaultImage from '../../logo.svg';
import { RootState } from '../../redux/store';
import { setSubCategory } from '../../redux/reducers/subCategory';

const SubCategories = () => {
  const sx = styles();
  const activeCategory = useSelector<RootState, string>(state => state.category);
  const activeSubCategory = useSelector<RootState, string>(state => state.subCategory);
  const dispatch = useDispatch();
  const { isLoading, isError, subCategories } = useSubCategory(activeCategory);

  return activeCategory ? (
    <Grid
      sx={sx.container}
      container
      display={activeSubCategory ? 'none' : 'flex'}
    >
      {isError ? (
        <Typography>
          Someting went wrong!!!
        </Typography>
      ) : isLoading ? (
        <CircularProgress />
      ) : subCategories ? subCategories.length ? subCategories.map((subCategory) => (
        <Grid
          item
          key={subCategory.subCategoryId}
          sx={sx.subCategory}
          title={subCategory.subCategoryName}
          onClick={() => dispatch(setSubCategory(subCategory.subCategoryId))}
        >
          <img
            src={subCategory.subCategoryImageURL || defaultImage}
            alt=''
            onError={(e) => {
              (e.target as HTMLImageElement).src = defaultImage;
            }}
          />
          <Typography sx={sx.subCategoryTitle}>
            {subCategory.subCategoryName}
          </Typography>
        </Grid>
      )) : (
        <Typography>
          No sub-categories found
        </Typography>
      ) : null}
    </Grid>
  ) : null;
}

export default React.memo(SubCategories);

const styles = () => ({
  container: {
    mt: 2,
    pt: 2,
    borderTop: '1px solid grey',
  },
  subCategory: {
    height: '200px',
    width: '200px',
    my: 1,
    mx: 1,
    cursor: 'pointer',
    borderRadius: '12px',
    border: '1px solid grey',
    padding: 2,
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    '& img': {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      objectPosition: 'center',
    },
    '&:hover': {
      borderColor: '#000000',
    },
  },
  subCategoryTitle: {
    fontSize: '13px',
    color: '#b1b1b1',
    position: 'absolute',
    bottom: '5px',
    fontWeight: 500,
  },
});