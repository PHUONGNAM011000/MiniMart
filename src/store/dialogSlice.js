import { createSlice } from '@reduxjs/toolkit';

const dialogSlice = createSlice({
  name: 'dialog',
  initialState: {
    idDialog: -1,
    title: '',
    titleDialog: '',
  },
  reducers: {
    showDialog(state, action) {
      state.idDialog = action.payload;
      state.title = 'xoá sản phẩm này không ?';
      state.titleDialog = 'remove';
    },
    hideDialog(state) {
      state.idDialog = -1;
      state.titleDialog = '';
      state.title = '';
    },
    editDialog(state) {
      state.title = 'sửa sản phẩm này không ?';
      state.titleDialog = 'edit';
    },
  },
});

export const dialogActions = dialogSlice.actions;
export default dialogSlice.reducer;
