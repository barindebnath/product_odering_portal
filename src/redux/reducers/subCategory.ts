import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState: string = '';

const subCategorySlice = createSlice({
  name: 'subCategory',
  initialState: initialState,
  reducers: {
    setSubCategory: (_, action: PayloadAction<string>) => action.payload,
  },
});

export const { setSubCategory } = subCategorySlice.actions;
export default subCategorySlice.reducer;
