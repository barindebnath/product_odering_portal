import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

// mui
import Grid from "@mui/material/Grid";
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

// local
import defaultImage from '../../logo.svg';
import { CartProduct as iCartProduct } from '../CenterContent/interface';
import { setProduct } from '../../redux/reducers/product';
import { RootState } from '../../redux/store';

type Props = {
  deleteOne?: (productId: string, variantId: string) => void;
} & iCartProduct;

const CartProduct = (props: Props) => {
  const editCart = useSelector<RootState, boolean>(state => state.editCart);
  const dispatch = useDispatch();

  return (
    <Grid
      sx={sx.tableRow}
      alignItems="center"
      container
    >
      <Grid item xs={6}>
        <Grid
          container
          textAlign="left"
          alignItems="center"
          sx={sx.productCell(editCart)}
          onClick={() => editCart ? dispatch(setProduct(props.productId)) : false}
        >
          <Grid xs={3} item>
            <img
              src={props.productImage || defaultImage}
              alt=''
              onError={(e) => {
                (e.target as HTMLImageElement).src = defaultImage;
              }}
            />
          </Grid>
          <Grid xs={9} item>
            <Typography fontSize="14px" fontWeight={700} noWrap>
              {props.itemDescription}
            </Typography>
            <Typography fontSize="12px">
              {props.colorDescription}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={2}>
        {props.quantity}
      </Grid>
      <Grid item xs={2} fontWeight={700}>
        {props.currencySymbol}{props.quantity * Number(props.grossPrice)}
      </Grid>
      <Grid item xs={2}>
        {props.deleteOne ? (
          <IconButton
            color="error"
            onClick={() => props.deleteOne && props.deleteOne(props.productId, props.variantId)}
          >
            <CloseIcon />
          </IconButton>
        ) : null}
      </Grid>
    </Grid>
  )
}

export default React.memo(CartProduct);

const sx = {
  tableRow: {
    mt: 2,
    textAlign: 'center',
    '&:last-of-type': {
      mb: 3,
    },
  },
  productCell: (editCart: boolean) => ({
    cursor: editCart ? 'pointer' : 'default',
  }),
};