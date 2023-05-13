import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState: string = '';

const categorySlice = createSlice({
  name: 'category',
  initialState: initialState,
  reducers: {
    setCategory: (_, action: PayloadAction<string>) => action.payload,
  }
});

export const { setCategory } = categorySlice.actions;
export default categorySlice.reducer;
