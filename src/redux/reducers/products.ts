import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState: string = '';

const productsSlice = createSlice({
  name: 'products',
  initialState: initialState,
  reducers: {
    setProducts: (_, action: PayloadAction<string>) => action.payload,
  },
});

export const { setProducts } = productsSlice.actions;
export default productsSlice.reducer;
