import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Product } from '../../components/CenterContent/interface';

const initialState: Product[] = [];

const productsSlice = createSlice({
  name: 'products',
  initialState: initialState,
  reducers: {
    setProducts: (_, action: PayloadAction<Product[]>) => action.payload,
  },
});

export const { setProducts } = productsSlice.actions;
export default productsSlice.reducer;
