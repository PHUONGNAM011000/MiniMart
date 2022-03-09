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
      const indexEditItem = state.dataCategory.findIndex(
        (item) => item.id === action.payload.id
      );
      state.dataCategory[indexEditItem].name = action.payload.name;
      state.dataCategory[indexEditItem].decripstion =
        action.payload.decripstion;
    },
  },
});

export const ActionsCategory = categoryReducer.actions;
export default categoryReducer.reducer;
