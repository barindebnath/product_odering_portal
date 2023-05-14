import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState: string = '';

const productSlice = createSlice({
  name: 'product',
  initialState: initialState,
  reducers: {
    setProduct: (_, action: PayloadAction<string>) => action.payload,
  },
});

export const { setProduct } = productSlice.actions;
export default productSlice.reducer;
