import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { CartProduct } from '../../components/CenterContent/interface';

const initialState: CartProduct[] = [];

const cartSlice = createSlice({
  name: 'cart',
  initialState: initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartProduct[]>) => {
      // update old products
      const newState = state.map((existingItem) => {
        const matchingVariant = action.payload.find(newItem =>
          newItem.productId === existingItem.productId && newItem.variantId === existingItem.variantId
        );
        if (matchingVariant) {
          return { ...existingItem, quantity: existingItem.quantity + matchingVariant.quantity };
        } else {
          return existingItem;
        }
      });

      // Add new products
      const newProducts = action.payload.filter(newItem =>
        !state.some((existingItem) =>
          existingItem.productId === newItem.productId && newItem.variantId === existingItem.variantId
        )
      );

      return [...newState, ...newProducts];
    },
    deleteFromCart: (state, action: PayloadAction<{ productId: string, variantId: string }>) =>
      state.filter((item) => !(item.variantId === action.payload.variantId && item.productId === action.payload.productId)),
    clearCart: () => [],
  }
});

export const { addToCart, deleteFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
