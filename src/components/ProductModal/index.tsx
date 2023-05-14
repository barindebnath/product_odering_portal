import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

// mui
import Grid from "@mui/material/Grid";
import Dialog from '@mui/material/Dialog';

// local
import { setProduct } from '../../redux/reducers/product';
import { RootState } from '../../redux/store';
import AddProduct from './AddProduct';
import { Product } from '../CenterContent/interface';
import OrderList from './OrderList';
import { setEditCart } from '../../redux/reducers/editCart';
import EditCart from './EditCart';


const ProductModal = () => {
  const activeProduct = useSelector<RootState, string>(state => state.product);
  const products = useSelector<RootState, Product[]>(state => state.products);
  const editCart = useSelector<RootState, boolean>(state => state.editCart);
  const dispatch = useDispatch();
  const product = products.find((item) => item.productId === activeProduct);

  return (
    <Dialog
      onClose={() => {
        dispatch(setProduct(''));
        dispatch(setEditCart(false));
      }}
      open={Boolean(product?.productId || editCart)}
      sx={sx.dialog}
      PaperProps={{
        sx: sx.paper,
      }}
    >
      <Grid
        container
        sx={sx.gridContainer}
      >
        <AddProduct />

        {editCart ? <EditCart /> : <OrderList />}
      </Grid>
    </Dialog>
  );
}

export default React.memo(ProductModal);

const sx = {
  dialog: {
    minHeight: 'unset',
  },
  paper: {
    position: 'absolute',
    margin: '0px',
    maxWidth: 'unset',
    maxHeight: 'unset',
    top: 0,
    bottom: 0,
    right: 0,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
  },
  gridContainer: {
    backgroundColor: '#FFFFFF',
    minHeight: '100vh',
    py: 3,
    overflowY: 'auto',
  },
};