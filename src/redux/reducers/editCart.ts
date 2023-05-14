import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState = false;

const editCartSlice = createSlice({
  name: 'editCart',
  initialState: initialState,
  reducers: {
    setEditCart: (_, action: PayloadAction<boolean>) => action.payload,
  },
});

export const { setEditCart } = editCartSlice.actions;
export default editCartSlice.reducer;
