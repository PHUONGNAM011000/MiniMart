import { createSlice } from '@reduxjs/toolkit';

const modalProductReducer = createSlice({
  name: 'modalProduct',
  initialState: {
    isShowModalProduct: false,
    productModal: {},
    showInputProduct: true,
    titleProductModal: 'add',
    validate: true,
    checkName: false,
    checkImage: false,
    checkAmount: false,
    checkDescription: false,
    checkMass: false,
    checkImageURL: false,
    checkAmountNegative: false,
    checkMassNegative: false,
  },
  reducers: {
    showModalProduct(state, action) {
      state.isShowModalProduct = true;
      state.productModal = action.payload;
      state.titleProductModal = 'show';
    },

    editModalProduct(state, action) {
      state.isShowModalProduct = true;
      state.productModal = action.payload;
      state.showInputProduct = false;
      state.titleProductModal = 'edit';
    },

    addModalProduct(state) {
      state.showInputProduct = false;
      state.isShowModalProduct = true;
    },

    hideModalProduct(state) {
      state.isShowModalProduct = false;
      state.productModal = {};
      state.showInputProduct = true;
      state.titleProductModal = 'add';
      state.validate = true;
      state.checkAmount = false;
      state.checkAmountNegative = false;
      state.checkDescription = false;
      state.checkMass = false;
      state.checkName = false;
      state.checkImage = false;
      state.checkImageURL = false;
      state.checkMassNegative = false;
    },

    nameChanged(state, action) {
      state.productModal.name = action.payload;
      state.validate = false;
      state.checkName = false;
    },

    urlChanged(state, action) {
      state.productModal.image = action.payload;
      state.validate = false;
      state.checkImage = false;
      state.checkImageURL = false;
    },

    amountChanged(state, action) {
      state.productModal.amount = action.payload;
      state.validate = false;
      state.checkAmount = false;
      state.checkAmountNegative = false;
    },

    massChanged(state, action) {
      state.productModal.mass = action.payload;
      state.validate = false;
      state.checkMass = false;
      state.checkMassNegative = false;
    },

    descriptionChanged(state, action) {
      state.productModal.description = action.payload;
      state.validate = false;
      state.checkDescription = false;
    },

    categoryChanged(state, action) {
      console.log(action.payload);
      state.productModal.category = action.payload;
      state.validate = false;
    },

    statusChanged(state, action) {
      state.productModal.status = action.payload;
      state.validate = false;
    },

    checkNameHandled(state) {
      state.checkName = true;
    },

    checkImageHandled(state) {
      state.checkImage = true;
    },

    checkImageURLHandled(state) {
      state.checkImageURL = true;
    },

    checkAmountHandled(state) {
      state.checkAmount = true;
    },

    checkAmountNegativeHandled(state) {
      state.checkAmountNegative = true;
    },

    checkDescriptionHandled(state) {
      state.checkDescription = true;
    },

    checkMassHandled(state) {
      state.checkMass = true;
    },

    checkMassNegativeHandled(state) {
      state.checkMassNegative = true;
    },
  },
});

export const ActionsModalProduct = modalProductReducer.actions;
export default modalProductReducer.reducer;
