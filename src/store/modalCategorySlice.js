import { createSlice } from '@reduxjs/toolkit';

const modalCategoryReducer = createSlice({
  name: 'modal',
  initialState: {
    isShowModalCategory: false,
    categoryModal: {},
    input: true,
  },
  reducers: {
    showModal(state, action) {
      state.isShowModalCategory = true;
      state.categoryModal = {
        name: action.payload.name,
        decripstion: action.payload.decripstion,
      };
    },
    hideModal(state) {
      state.isShowModalCategory = false;
      state.categoryModal = {};
      state.input = true;
    },
    editModal(state, action) {
      state.isShowModalCategory = true;
      state.categoryModal = {
        id: action.payload.id,
        name: action.payload.name,
        decripstion: action.payload.decripstion,
      };
      state.input = false;
    },
    modalNameChange(state, action) {
      state.categoryModal.name = action.payload;
    },
    modalDecripstionChange(state, action) {
      state.categoryModal.decripstion = action.payload;
    },
    showAddCategory(state) {
      state.isShowModalCategory = true;
      state.input = false;
    },
  },
});

export const ActionsModal = modalCategoryReducer.actions;
export default modalCategoryReducer.reducer;
