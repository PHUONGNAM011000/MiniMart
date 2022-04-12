import { configureStore } from '@reduxjs/toolkit';
import categoryReducer from './categorySlice';
import menuReducer from './menuSlice';
import modalCategoryReducer from './modalCategorySlice';
import productReducer from './productSlice';
import modalProductReducer from './modalProductSlicde';
import dialogReducer from './dialogSlice';
import customThemeReducer from './customThemeSlice';
import searchReducer from './searchSlice';
import selectReducer from './selectSlice';

const store = configureStore({
  reducer: {
    menu: menuReducer,
    category: categoryReducer,
    modalCategory: modalCategoryReducer,
    product: productReducer,
    modalProduct: modalProductReducer,
    dialog: dialogReducer,
    customTheme: customThemeReducer,
    search: searchReducer,
    select: selectReducer,
  },
});

export default store;
