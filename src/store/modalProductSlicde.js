import { createSlice } from '@reduxjs/toolkit';

const modalProductReducer = createSlice({
  name: 'modalProduct',
  initialState: {
    isShowModalProduct: false,
    productModal: {},
    showInputProduct: true,
  },
  reducers: {
    showModalProduct(state, action) {
      state.isShowModalProduct = true;
      state.productModal = action.payload;
    },

    editModalProduct(state, action) {
      state.isShowModalProduct = true;
      state.productModal = action.payload;
      state.showInputProduct = false;
    },

    addModalProduct(state) {
      state.showInputProduct = false;
      state.isShowModalProduct = true;
    },

    hideModalProduct(state) {
      state.isShowModalProduct = false;
      state.productModal = {};
      state.showInputProduct = true;
    },

    nameChanged(state, action) {
      state.productModal.name = action.payload;
    },

    amountChanged(state, action) {
      state.productModal.amount = action.payload;
    },

    massChanged(state, action) {
      state.productModal.mass = action.payload;
    },

    descriptionChanged(state, action) {
      state.productModal.description = action.payload;
    },

    categoryChanged(state, action) {
      state.productModal.category = action.payload;
    },

    statusChanged(state, action) {
      state.productModal.status = action.payload;
    },
  },
});

export const ActionsModalProduct = modalProductReducer.actions;
export default modalProductReducer.reducer;
