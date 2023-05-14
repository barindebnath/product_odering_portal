import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { CartProduct } from '../../components/CenterContent/interface';

const initialState: CartProduct[] = [];

const cartSlice = createSlice({
  name: 'orderList',
  initialState: initialState,
  reducers: {
    addToOrderList: (state, action: PayloadAction<CartProduct>) => {
      let isExisting = false;
      state.map((item) => {
        if (item.variantId === action.payload.variantId && item.productId === action.payload.productId) {
          isExisting = true;
          item.quantity = item.quantity + action.payload.quantity;
          return item;
        }
        return item;
      });

      if (!isExisting) {
        return [...state, action.payload];
      }

    },
    deleteFromOrderList: (state, action: PayloadAction<{ productId: string, variantId: string }[]>) =>
      state.filter((item) => !action.payload.find((deleteItem) => (
        item.variantId === deleteItem.variantId && item.productId === deleteItem.productId
      ))),
  }
});

export const { addToOrderList, deleteFromOrderList } = cartSlice.actions;
export default cartSlice.reducer;
