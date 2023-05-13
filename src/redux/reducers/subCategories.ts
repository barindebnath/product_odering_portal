import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { SubCategory } from '../../components/CenterContent/interface';

const initialState: SubCategory[] = [];

const subCategoriesSlice = createSlice({
  name: 'subCategories',
  initialState: initialState,
  reducers: {
    setSubCategories: (_, action: PayloadAction<SubCategory[]>) => action.payload,
  }
});

export const { setSubCategories } = subCategoriesSlice.actions;
export default subCategoriesSlice.reducer;
