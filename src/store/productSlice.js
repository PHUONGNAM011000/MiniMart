import { createSlice } from '@reduxjs/toolkit';
import { DUMMY_PRODUCT } from '../Data/DataProduct';

const productReducer = createSlice({
  name: 'product',
  initialState: {
    dataProduct: DUMMY_PRODUCT,
  },
  reducers: {
    removeProduct(state, action) {
      state.dataProduct = state.dataProduct.filter(
        (item) => item.id !== action.payload
      );
    },
    editProduct(state, action) {
      if (action.payload.id) {
        const indexEditItem = state.dataProduct.findIndex(
          (item) => item.id === action.payload.id
        );
        state.dataProduct[indexEditItem] = { ...action.payload };
      } else {
        const copyDataProduct = [...state.dataProduct];

        if (copyDataProduct.length !== 0) {
          const lastItemCategory = copyDataProduct.reduce(function (
            accumulator,
            element
          ) {
            return accumulator.stt > element.stt ? accumulator : element;
          });
          if (
            action.payload.category === undefined ||
            action.payload.status === undefined
          ) {
            state.dataProduct.push({
              id: lastItemCategory.id + 1,
              stt: lastItemCategory.stt + 1,
              ...action.payload,
              category: 'Áo Thun',
              status: 'Còn hàng',
            });
          } else {
            state.dataProduct.push({
              id: lastItemCategory.id + 1,
              stt: lastItemCategory.stt + 1,
              ...action.payload,
            });
          }
        } else {
          if (
            action.payload.category === undefined ||
            action.payload.status === undefined
          ) {
            state.dataProduct.push({
              id: 1,
              stt: 1,
              ...action.payload,
              category: 'Áo Thun',
              status: 'Còn hàng',
            });
          } else {
            state.dataProduct.push({
              id: 1,
              stt: 1,
              ...action.payload,
            });
          }
        }
      }
    },
  },
});

export const ActionsProduct = productReducer.actions;
export default productReducer.reducer;
