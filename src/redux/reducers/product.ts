import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Product } from '../../components/CenterContent/interface';

const initialState: Product | {} = {};

const productSlice = createSlice({
  name: 'product',
  initialState: initialState,
  reducers: {
    setProduct: (_, action: PayloadAction<Product | {}>) => action.payload,
  },
});

export const { setProduct } = productSlice.actions;
export default productSlice.reducer;
