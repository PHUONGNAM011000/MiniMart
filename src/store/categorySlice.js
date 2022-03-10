import { createSlice } from '@reduxjs/toolkit';
import { DUMMY_CATEGORY } from '../Data/DataCategory';

const categoryReducer = createSlice({
  name: 'category',
  initialState: {
    dataCategory: DUMMY_CATEGORY,
  },
  reducers: {
    remove(state, action) {
      const idItemRemove = action.payload;

      state.dataCategory = state.dataCategory.filter(
        (item) => item.id !== idItemRemove
      );
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
