import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

// mui
import Grid from "@mui/material/Grid";
import Typography from '@mui/material/Typography';
import HomeIcon from '@mui/icons-material/Home';

// local
import { RootState } from '../redux/store';
import { SubCategory } from './CenterContent/interface';
import { setSubCategory } from '../redux/reducers/subCategory';
import defaultImage from '../logo.svg';

const BottomContent = () => {
  const sx = styles();
  const subCategories = useSelector<RootState, SubCategory[]>(state => state.subCategories);
  const activeSubCategory = useSelector<RootState, string>(state => state.subCategory);
  const dispatch = useDispatch();

  return (
    <Grid
      sx={sx.container}
      container
      wrap="nowrap"
      direction="row"
      display={(subCategories.length && activeSubCategory) ? 'flex' : 'none'}
    >
      <Grid
        item
        sx={sx.subCategory(false, true)}
      >
        <HomeIcon />
      </Grid>
      {subCategories.length ? subCategories.map((subCategory) => (
        <Grid
          item
          key={subCategory.subCategoryId}
          sx={sx.subCategory(activeSubCategory === subCategory.subCategoryId)}
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
      )) : null}
    </Grid>
  )
}

export default React.memo(BottomContent);

const styles = () => ({
  container: {
    overflowX: 'auto',
    overflowY: 'hidden',
    width: '100%',
    background: '#FFFFFF',
    padding: 2,
    borderRadius: '8px',
  },
  subCategory: (isActive: boolean, isDisabled?: boolean) => ({
    height: '70px',
    minWidth: '130px',
    width: '130px',
    my: 1,
    mx: 1,
    cursor: isDisabled ? 'default' : 'pointer',
    borderRadius: '12px',
    border: '2px solid',
    display: 'flex',
    justifyContent: 'center',
    borderColor: isActive ? 'red' : 'grey',
    flexDirection: 'column',
    '& img, & svg': {
      width: '50px',
      height: '50px',
      objectFit: 'cover',
      objectPosition: 'center',
      margin: 'auto',
    },
    '&:hover': {
      borderColor: isDisabled ? 'grey' : isActive ? 'red' : '#ff9d9d',
    },
  }),
  subCategoryTitle: {
    fontSize: '13px',
    color: '#b1b1b1',
    fontWeight: 500,
    textAlign: 'center',
  },
});