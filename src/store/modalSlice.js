import { createSlice } from '@reduxjs/toolkit';

const modalReducer = createSlice({
  name: 'modal',
  initialState: {
    isShowModal: false,
    categoryModal: {},
    input: true,
  },
  reducers: {
    showModal(state, action) {
      state.isShowModal = true;
      state.categoryModal = {
        name: action.payload.name,
        decripstion: action.payload.decripstion,
      };
    },
    hideModal(state) {
      state.isShowModal = false;
      state.categoryModal = {};
      state.input = true;
    },
    editModal(state, action) {
      state.isShowModal = true;
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
      state.isShowModal = true;
      state.input = false;
    },
  },
});

export const ActionsModal = modalReducer.actions;
export default modalReducer.reducer;
