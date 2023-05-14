import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// mui
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import Button from '@mui/material/Button';

// local
import { setProduct } from '../../redux/reducers/product';
import { RootState } from '../../redux/store';
import { CartProduct as iCartProduct } from '../CenterContent/interface';
import CartProduct from '../RightContent/CartProduct';
import { deleteFromOrderList } from '../../redux/reducers/orderList';
import { addToCart } from '../../redux/reducers/cart';

const OrderList = () => {
  const activeProduct = useSelector<RootState, string>(state => state.product);
  const orderList = useSelector<RootState, iCartProduct[]>(state => state.orderList);
  const dispatch = useDispatch();
  const products = orderList.filter((items) => items.productId === activeProduct);

  const deleteOne = useCallback((productId: string, variantId: string) => {
    dispatch(deleteFromOrderList([{ productId, variantId }]))
  }, []);

  return (
    <Box sx={sx.orderList}>
      <Grid justifyContent="space-between" alignItems="center" container>
        <Typography variant='h6' fontWeight={700}>
          Order list
        </Typography>

        <IconButton onClick={() => dispatch(setProduct(''))}>
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

      {products.length ? (
        <Grid sx={sx.listContainer} direction="column" justifyContent="space-between" container>
          <div>
            {products.map((product) => (
              <CartProduct
                key={product.productId + product.variantId}
                {...product}
                deleteOne={deleteOne}
              />
            ))}
          </div>

          <Button
            variant="contained"
            color="error"
            onClick={() => {
              dispatch(addToCart(products));
              dispatch(deleteFromOrderList(products.map((item) => ({ productId: item.productId, variantId: item.variantId }))));
              dispatch(setProduct(''));
            }}
          >
            Add to Cart
          </Button>
        </Grid>
      ) : (
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

export default React.memo(OrderList);

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
  listContainer: {
    width: "100%",
    textAlign: "center",
    minHeight: '500px',
  },
  tableHeader: {
    backgroundColor: '#e4e4e4',
    py: 2,
    textAlign: 'center',
    mt: 3,
  },
  tableRow: {
    mt: 2,
    textAlign: 'center',
    '&:last-of-type': {
      mb: 3,
    },
  },
};