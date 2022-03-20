import { createSlice } from '@reduxjs/toolkit';

const modalCategoryReducer = createSlice({
  name: 'modal',
  initialState: {
    isShowModalCategory: false,
    categoryModal: {},
    input: true,
    titleModal: 'add',
    validate: true,
    checkValidateName: false,
    checkValidateDecripstion: false,
  },
  reducers: {
    showModal(state, action) {
      state.titleModal = 'show';
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
      state.titleModal = 'add';
      state.validate = true;
      state.checkValidateName = false;
      state.checkValidateDecripstion = false;
    },
    editModal(state, action) {
      state.titleModal = 'edit';
      state.isShowModalCategory = true;
      state.categoryModal = {
        id: action.payload.id,
        name: action.payload.name,
        decripstion: action.payload.decripstion,
      };
      state.input = false;
    },
    modalNameChange(state, action) {
      state.validate = false;
      state.checkValidateName = false;
      state.categoryModal.name = action.payload;
    },
    modalDecripstionChange(state, action) {
      state.validate = false;
      state.checkValidateDecripstion = false;
      state.categoryModal.decripstion = action.payload;
    },
    showAddCategory(state) {
      state.isShowModalCategory = true;
      state.input = false;
      state.titleModal = 'add';
    },
    checkName(state) {
      state.checkValidateName = true;
    },
    checkDescription(state) {
      state.checkValidateDecripstion = true;
    },
  },
});

export const ActionsModal = modalCategoryReducer.actions;
export default modalCategoryReducer.reducer;
