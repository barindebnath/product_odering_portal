import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

// mui
import Grid from "@mui/material/Grid";
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import IconButton from '@mui/material/IconButton';

// local
import defaultImage from '../../logo.svg';
import useProduct from '../../hooks/useProduct';
import { RootState } from '../../redux/store';
import { setProduct } from '../../redux/reducers/product';

const Products = () => {
  const sx = styles();
  const activeSubCategory = useSelector<RootState, string>(state => state.subCategory);
  const dispatch = useDispatch();
  const { isLoading, isError, products } = useProduct(activeSubCategory);

  return (
    <Grid
      sx={sx.container}
      container
      display={activeSubCategory ? 'flex' : 'none'}
    >
      {isError ? (
        <Typography>
          Someting went wrong!!!
        </Typography>
      ) : isLoading ? (
        <CircularProgress />
      ) : products ? products.length ? products.map((product) => (
        <Grid
          item
          key={product.productId}
          sx={sx.product}
          onClick={() => dispatch(setProduct(product))}
        >
          <img
            src={(product.productImages && product.productImages[0]) || defaultImage}
            alt=''
            onError={(e) => {
              (e.target as HTMLImageElement).src = defaultImage;
            }}
          />
          <Typography sx={sx.description}>
            {product.itemDescription}
          </Typography>
          <IconButton sx={sx.favroitButton}>
            <FavoriteBorderIcon />
          </IconButton>
        </Grid>
      )) : (
        <Typography>
          No sub-categories found
        </Typography>
      ) : null}
    </Grid>
  );
}

export default React.memo(Products);

const styles = () => ({
  container: {
    mt: 2,
  },
  product: {
    my: 1,
    mx: 1,
    cursor: 'pointer',
    borderRadius: '12px',
    border: '1px solid grey',
    padding: 2,
    position: 'relative',
    textAlign: 'center',
    '& img': {
      width: '150px',
      height: '150px',
      objectFit: 'cover',
      objectPosition: 'center',
    },
    '&:hover': {
      borderColor: '#000000',
    },
  },
  description: {

  },
  favroitButton: {
    position: 'absolute',
    top: 0,
    right: 0,
    color: 'red',
  },
});