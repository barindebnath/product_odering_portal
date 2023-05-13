import { combineReducers, configureStore } from '@reduxjs/toolkit';

// reducers
import category from './reducers/category';
import subCategory from './reducers/subCategory';
import subCategories from './reducers/subCategories';
import product from './reducers/product';

// Define the shape of the root state object
export interface RootState {
  category: ReturnType<typeof category>;
  subCategory: ReturnType<typeof subCategory>;
  product: ReturnType<typeof product>;
  subCategories: ReturnType<typeof subCategories>;
  // Add more state slices here as needed
}

// Combine individual reducers into a root reducer
const rootReducer = combineReducers({
  category,
  subCategory,
  subCategories,
  product,
  // Add more child reducers here as needed
});

// Configure the Redux store with the root reducer
const store = configureStore({
  reducer: rootReducer,
});

export default store;
