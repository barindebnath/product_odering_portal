import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// mui
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';

// local
import { setProduct } from '../../redux/reducers/product';
import { RootState } from '../../redux/store';
import { CartProduct as iCartProduct } from '../CenterContent/interface';
import CartProduct from '../RightContent/CartProduct';
import { deleteFromCart } from '../../redux/reducers/cart';
import { setEditCart } from '../../redux/reducers/editCart';

const EditCart = () => {
  const cart = useSelector<RootState, iCartProduct[]>(state => state.cart);
  const dispatch = useDispatch();

  const deleteOne = useCallback((productId: string, variantId: string) => {
    dispatch(deleteFromCart({ productId, variantId }))
  }, []);

  return (
    <Box sx={sx.orderList}>
      <Grid justifyContent="space-between" alignItems="center" container>
        <Typography variant='h6' fontWeight={700}>
          Edit Cart
        </Typography>

        <IconButton
          onClick={() => {
            dispatch(setProduct(''));
            dispatch(setEditCart(false));
          }}
        >
          <CloseIcon />
        </IconButton>
      </Grid>

      <Grid sx={sx.tableHeader} container>
        <Grid item xs={6}>
          Product
        </Grid>
        <Grid item xs={2}>
          Quantity
        </Grid>
        <Grid item xs={2}>
          Price
        </Grid>
        <Grid item xs={2} />
      </Grid>

      {cart.length ? cart.map((product) => (
        <CartProduct
          key={product.productId + product.variantId}
          {...product}
          deleteOne={deleteOne}
        />
      )) : (
        <Box sx={sx.emptyList}>
          <SentimentVeryDissatisfiedIcon fontSize="large" />
          <Typography fontSize="20px">
            Items not added yet
          </Typography>
        </Box>
      )}
    </Box>
  )
}

export default React.memo(EditCart);

const sx = {
  orderList: {
    width: '500px',
    px: 4,
  },
  emptyList: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '500px',
  },
  tableHeader: {
    backgroundColor: '#e4e4e4',
    py: 2,
    textAlign: 'center',
    mt: 3,
  },
};