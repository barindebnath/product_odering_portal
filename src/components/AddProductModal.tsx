import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

// mui
import Dialog from '@mui/material/Dialog';
import { Product } from './CenterContent/interface';
import { RootState } from '../redux/store';
import { setProduct } from '../redux/reducers/product';


const AddProductModal = () => {
  const sx = styles();
  const activeProduct = useSelector<RootState, Product | {}>(state => state.product);
  const dispatch = useDispatch();

  return 'productId' in activeProduct ? (
    <Dialog
      onClose={() => dispatch(setProduct({}))}
      open={Boolean(activeProduct.productId || false)}
      sx={sx.dialog}
    >

    </Dialog>
  ) : null;
}

export default React.memo(AddProductModal);

const styles = () => ({
  dialog: {},
});