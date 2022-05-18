import { createSlice } from '@reduxjs/toolkit';
import { DUMMY_PRODUCT } from '../Data/DataProduct';

const productReducer = createSlice({
  name: 'product',
  initialState: {
    dataProduct: DUMMY_PRODUCT,
  },
  reducers: {
    removeProduct(state, action) {
      function sortValueDelete(arr, key) {
        if (arr[0].id === key) {
          arr.shift();
          let result = arr.map((item) => {
            return {
              ...item,
              stt: item.stt - 1,
            };
          });

          return result;
        }

        if (arr[arr.length - 1].id === key) {
          arr.pop();

          return arr;
        }

        const idItemRemove = arr.findIndex((item) => item.id === key);
        console.log(idItemRemove);
        let result = arr.splice(idItemRemove, arr.length - idItemRemove);

        result.shift();

        const oke = result.map((item) => {
          return {
            ...item,
            stt: item.stt - 1,
          };
        });
        return [...arr, ...oke];
      }
      state.dataProduct = sortValueDelete(state.dataProduct, action.payload);
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
