import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// mui
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Typography from '@mui/material/Typography';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import EditIcon from '@mui/icons-material/Edit';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Dialog from '@mui/material/Dialog';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

// local
import { RootState } from '../../redux/store';
import { CartProduct as iCartProduct } from '../CenterContent/interface';
import CartProduct from '../RightContent/CartProduct';
import { setEditCart } from '../../redux/reducers/editCart';
import { clearCart } from '../../redux/reducers/cart';
import { setCategory } from '../../redux/reducers/category';
import { setSubCategory } from '../../redux/reducers/subCategory';

const RightContent = () => {
  const cart = useSelector<RootState, iCartProduct[]>(state => state.cart);
  const dispatch = useDispatch();
  const [cartModal, setCartModal] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);

  const currencySymbol = cart[0]?.currencySymbol;

  const itemsTotal = cart.reduce((acc, item) => {
    const itemTotalPrice = parseFloat(item.grossPrice) * item.quantity;
    return acc + itemTotalPrice;
  }, 0);

  const taxDetails = [{
    title: 'Items total',
    value: itemsTotal,
  }, {
    title: 'SGST (9%)',
    value: itemsTotal * 0.09,
  }, {
    title: 'CGST (9%)',
    value: itemsTotal * 0.09,
  }, {
    title: 'IGST (9%)',
    value: itemsTotal * 0.09,
  }, {
    title: 'Taxable Ammount',
    value: itemsTotal * 0.09 * 3,
  }];

  const clearCartHandler = () => {
    dispatch(clearCart());
    dispatch(setCategory(''));
    dispatch(setSubCategory(''));
  };

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

      {cart.length ? cart.slice(0, 4).map((product) => (
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

      {cart.length > 4 ? (
        <Box sx={sx.seeAllBox}>
          <Button
            endIcon={<ChevronRightIcon />}
            color="error"
            onClick={() => setCartModal(true)}
          >
            See all
          </Button>
        </Box>
      ) : null}

      {cart.length ? (
        <>
          <Box sx={sx.taxBox}>
            {taxDetails.map((item) => (
              <Grid
                key={item.title}
                container
                alignItems="center"
                justifyContent="space-between"
                mt={1}
              >
                <Typography fontWeight={700} color="grey">{item.title}</Typography>
                <Typography fontWeight={700} color="grey">{currencySymbol}{item.value}</Typography>
              </Grid>
            ))}
          </Box>

          <Grid
            container
            alignItems="center"
            justifyContent="space-between"
            sx={sx.orderTotalContainer}
          >
            <Typography fontWeight={700}>Order Total</Typography>
            <Typography fontWeight={700}>{currencySymbol}{itemsTotal + (itemsTotal * 0.09 * 3)}</Typography>
          </Grid>

          <Grid
            container
            alignItems="center"
            justifyContent="space-between"
            mt={3}
          >
            <Button
              variant="outlined"
              color="error"
              size="large"
              onClick={clearCartHandler}
            >
              Clear Cart
            </Button>

            <Button
              variant="contained"
              color="error"
              size="large"
              onClick={() => {
                setOrderPlaced(true);
                clearCartHandler();
              }}
            >
              Place Order
            </Button>
          </Grid>
        </>
      ) : null}

      <Snackbar
        open={orderPlaced}
        autoHideDuration={6000}
        onClose={() => setOrderPlaced(false)}
      >
        <Alert onClose={() => setOrderPlaced(false)} severity="success" sx={{ width: '100%' }}>
          Order Placed Successfully
        </Alert>
      </Snackbar>

      <Dialog
        onClose={() => setCartModal(false)}
        open={cartModal}
        scroll='body'
        maxWidth="lg"
      >
        <Box width="500px">
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
        </Box>
      </Dialog>
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
  seeAllBox: {
    mt: 1,
    borderTop: '2px dashed #d7d7d7',
    textAlign: 'center',
    pt: 1,
  },
  taxBox: {
    mt: 3,
    borderTop: '2px dashed #d7d7d7',
    pt: 1,
    px: 1,
  },
  orderTotalContainer: {
    borderTop: '2px solid #d7d7d7',
    mt: 1,
    pt: 2,
    px: 1,
  },
};