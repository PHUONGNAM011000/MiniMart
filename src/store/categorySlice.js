import { createSlice } from '@reduxjs/toolkit';
import { DUMMY_CATEGORY } from '../Data/DataCategory';

const categoryReducer = createSlice({
  name: 'category',
  initialState: {
    dataCategory: DUMMY_CATEGORY,
  },
  reducers: {
    remove(state, action) {
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

      state.dataCategory = sortValueDelete(state.dataCategory, action.payload);
    },
    editCategory(state, action) {
      if (action.payload.id) {
        const indexEditItem = state.dataCategory.findIndex(
          (item) => item.id === action.payload.id
        );
        state.dataCategory[indexEditItem].name = action.payload.name;
        state.dataCategory[indexEditItem].decripstion =
          action.payload.decripstion;
      } else {
        const copyDataCategory = [...state.dataCategory];
        const lastItemCategory = copyDataCategory[copyDataCategory.length - 1];
        if (copyDataCategory.length !== 0) {
          state.dataCategory.push({
            id: lastItemCategory.id + 1,
            stt: lastItemCategory.stt + 1,
            name: action.payload.name,
            decripstion: action.payload.decripstion,
          });
        } else {
          state.dataCategory.push({
            id: 1,
            stt: 1,
            name: action.payload.name,
            decripstion: action.payload.decripstion,
          });
        }
      }
    },
  },
});

export const ActionsCategory = categoryReducer.actions;
export default categoryReducer.reducer;
