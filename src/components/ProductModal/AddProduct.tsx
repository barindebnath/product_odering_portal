import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// mui
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Checkbox from '@mui/material/Checkbox';

// local
import { CartProduct, Product, ProductVariant } from '../CenterContent/interface';
import { RootState } from '../../redux/store';
import defaultImage from '../../logo.svg';
import { addToOrderList } from '../../redux/reducers/orderList';
import { addToCart } from '../../redux/reducers/cart';

const AddProduct = () => {
  const activeProduct = useSelector<RootState, string>(state => state.product);
  const products = useSelector<RootState, Product[]>(state => state.products);
  const editCart = useSelector<RootState, boolean>(state => state.editCart);
  const dispatch = useDispatch();
  const product = products.find((item) => item.productId === activeProduct);
  const [variant, setVariant] = useState<ProductVariant | null>(null);
  const [quantityError, setQuantityError] = useState('Minimum orders 12');
  const quantity = useRef(0);

  useEffect(() => {
    product?.variants && setVariant(product.variants[0])
  }, [activeProduct]);

  return product ? (
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
        <Typography fontSize="18px" fontWeight={700}>
          {product.itemDescription}
        </Typography>

        <Typography fontSize="18px" fontWeight={700}>
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
          key={item.variantId}
          onClick={() => setVariant(item)}
          sx={sx.colorButton(item.variantId === variant?.variantId)}
        >
          {item.colorDescription}
        </Button>
      ))}

      <Typography mt={3} fontSize="14px" fontWeight={500}>
        Please select packaging description
      </Typography>

      {product.variants?.length && product.variants.slice(0, 5).map((item) => (
        <Button
          key={item.variantId}
          onClick={() => setVariant(item)}
          sx={sx.colorButton(item.variantId === variant?.variantId)}
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
          const value = Number(e.target.value.trim());
          if (isNaN(value)) setQuantityError('Enter numeric value');
          else if (value < 12) setQuantityError('Minimum orders 12');
          else if (value > 100) setQuantityError('Maximum orders 100');
          else setQuantityError('');
        }}
        onChange={(e) => quantity.current = Number(e.target.value.trim())}
      />
      <Typography fontSize="12px" color="red">
        {quantityError}
      </Typography>

      <Grid mt={3} alignItems="center" container>
        <Checkbox />
        <Typography fontSize="14px">
          Need urgent order
        </Typography>
      </Grid>

      <Box textAlign="center" mt={3}>
        <Button
          onClick={() => {
            const cartProduct: CartProduct = {
              productId: product.productId,
              variantId: variant?.variantId || '',
              itemDescription: product.itemDescription,
              colorDescription: variant?.colorDescription || '',
              quantity: quantity.current,
              grossPrice: variant?.grossPrice || '',
              currencySymbol: product.currency.symbol,
              productImage: product.productImages && product.productImages[0],
            };

            const isValid = !isNaN(quantity.current) && (100 >= quantity.current) && (quantity.current >= 12);

            if (isValid) {
              editCart
                ? dispatch(addToCart([cartProduct]))
                : dispatch(addToOrderList(cartProduct));
            }
          }}
          variant="outlined"
          sx={sx.addButton}
        >
          Add
        </Button>
      </Box>
    </Box>
  ) : null;
}

export default React.memo(AddProduct);

const sx = {
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
    '&:hover': {
      borderColor: 'red',
    },
  },
};