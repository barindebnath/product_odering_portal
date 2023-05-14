import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

// mui
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from '@mui/material/Typography';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import EditIcon from '@mui/icons-material/Edit';

// local
import { RootState } from '../../redux/store';
import { CartProduct as iCartProduct } from '../CenterContent/interface';
import CartProduct from '../RightContent/CartProduct';
import { setEditCart } from '../../redux/reducers/editCart';

const RightContent = () => {
  const cart = useSelector<RootState, iCartProduct[]>(state => state.cart);
  const dispatch = useDispatch();

  return (
    <div>
      <Grid sx={sx.tableHeader} alignItems="center" container>
        <Grid item xs={6}>
          Product
        </Grid>
        <Grid item xs={2}>
          Quantity
        </Grid>
        <Grid item xs={2}>
          Price
        </Grid>
        <Grid item xs={2} >
          {cart.length ? (
            <Typography sx={sx.editCell} onClick={() => dispatch(setEditCart(true))}>
              <EditIcon fontSize="small" /> Edit
            </Typography>
          ) : null}
        </Grid>
      </Grid>

      {cart.length ? cart.map((product) => (
        <CartProduct
          key={product.productId + product.variantId}
          {...product}
        />
      )) : (
        <Box sx={sx.emptyList}>
          <SentimentVeryDissatisfiedIcon fontSize="large" />
          <Typography fontSize="20px">
            Items not added yet
          </Typography>
        </Box>
      )}
    </div>
  )
}

export default React.memo(RightContent);

const sx = {
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
  },
  editCell: {
    cursor: 'pointer',
    color: "red",
    '& svg': {
      verticalAlign: 'middle',
      fontSie: '16px',
    },
  },
};