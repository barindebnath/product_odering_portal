import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// mui
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Dialog from '@mui/material/Dialog';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Checkbox from '@mui/material/Checkbox';

// local
import { Product, ProductVariant } from './CenterContent/interface';
import { RootState } from '../redux/store';
import { setProduct } from '../redux/reducers/product';
import defaultImage from '../logo.svg';


const AddProductModal = () => {
  const product = useSelector<RootState, Product | {}>(state => state.product);
  const dispatch = useDispatch();
  const [variant, setVariant] = useState<ProductVariant | null>(null);
  // const [orders, setOrders] = useState(0);
  const [orderError, setOrderError] = useState('Minimum orders 12');

  useEffect(() => {
    ('variants' in product && product.variants) && setVariant(product.variants[0])
  }, [product]);

  return ('productId' in product) ? (
    <Dialog
      onClose={() => dispatch(setProduct({}))}
      open={Boolean('productId' in product && product.productId)}
      sx={sx.dialog}
      PaperProps={{
        sx: sx.paper,
      }}
    >
      <Grid
        container
        sx={sx.gridContainer}
      >
        <Box sx={sx.productVarients}>
          <Typography variant='h6' fontWeight={700}>
            {product.itemDescription}
          </Typography>
          <Box sx={sx.imageWrapper}>
            <img
              src={(product.productImages && product.productImages[0]) || defaultImage}
              alt=''
              onError={(e) => {
                (e.target as HTMLImageElement).src = defaultImage;
              }}
            />
            <IconButton sx={sx.favroitButton}>
              <FavoriteBorderIcon />
            </IconButton>
          </Box>
          <Typography mt={3} color="grey">
            #{variant?.colorCode}
          </Typography>

          <Grid justifyContent="space-between" container>
            <Typography fontSize="14px" fontWeight={700}>
              {product.itemDescription}
            </Typography>

            <Typography fontSize="14px" fontWeight={700}>
              {product.currency?.symbol}{variant?.grossPrice}
            </Typography>
          </Grid>
          <Typography mt={0.5} fontSize="14px" fontWeight={500}>
            {variant?.saleDescription}
          </Typography>

          <Typography mt={3} fontSize="14px" fontWeight={500}>
            Please select color description
          </Typography>

          {product.variants?.length && product.variants.slice(0, 5).map((item) => (
            <Button
              key={item._id}
              onClick={() => setVariant(item)}
              sx={sx.colorButton(item._id === variant?._id)}
            >
              {item.colorDescription}
            </Button>
          ))}

          <Typography mt={3} fontSize="14px" fontWeight={500}>
            Please select packaging description
          </Typography>

          {product.variants?.length && product.variants.slice(0, 5).map((item) => (
            <Button
              key={item._id}
              onClick={() => setVariant(item)}
              sx={sx.colorButton(item._id === variant?._id)}
            >
              {item.packingDescription}
            </Button>
          ))}

          <Typography mt={3} fontSize="14px" fontWeight={500}>
            Enter Quantity
          </Typography>
          <TextField
            variant="outlined"
            size="small"
            onBlur={(e) => {
              const value = Number(e.target.value);
              if (isNaN(value)) setOrderError('Enter numeric value');
              else if (value < 12) setOrderError('Minimum orders 12');
              else if (value > 100) setOrderError('Maximum orders 100');
              else setOrderError('');
            }}
          />
          <Typography fontSize="12px" color="red">
            {orderError}
          </Typography>

          <Grid mt={3} alignItems="center" container>
            <Checkbox />
            <Typography fontSize="14px">
              Need urgent order
            </Typography>
          </Grid>

          <Box textAlign="center" mt={3}>
            <Button
              onClick={() => { }}
              variant="outlined"
              sx={sx.addButton}
            >
              Add
            </Button>
          </Box>
        </Box>

        <Box sx={sx.orderList}>
          <Grid justifyContent="space-between" alignItems="center" container>
            <Typography variant='h6' fontWeight={700}>
              Order list
            </Typography>

            <IconButton onClick={() => dispatch(setProduct({}))}>
              <CloseIcon />
            </IconButton>
          </Grid>
        </Box>
      </Grid>
    </Dialog>
  ) : null;
}

export default React.memo(AddProductModal);

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
  },
  productVarients: {
    width: '500px',
    px: 4,
    borderRight: '2px dashed grey',
  },
  imageWrapper: {
    mt: 2,
    backgroundColor: '#e4e4e4',
    borderRadius: '4px',
    height: '300px',
    textAlign: 'center',
    position: 'relative',
    '& img': {
      height: '100%',
    },
  },
  favroitButton: {
    position: 'absolute',
    top: 0,
    right: 0,
    color: 'red',
  },
  colorButton: (isSelected: boolean) => ({
    border: `1px solid ${isSelected ? 'red' : 'grey'}`,
    color: isSelected ? 'red' : 'black',
    px: 3,
    mr: 1,
    mt: 1,
  }),
  addButton: {
    width: '50%',
    color: 'red',
    borderColor: 'red',
    '&:hover':{
      borderColor: 'red',
    },
  },
  orderList: {
    width: '400px',
    px: 4,
  },
};