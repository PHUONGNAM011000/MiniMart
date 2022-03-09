import { configureStore } from '@reduxjs/toolkit';
import categoryReducer from './categorySlice';
import menuReducer from './menuSlice';
import modalReducer from './modalSlice';

const store = configureStore({
  reducer: {
    menu: menuReducer,
    category: categoryReducer,
    modal: modalReducer,
  },
});

export default store;
