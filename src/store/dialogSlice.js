import { createSlice } from '@reduxjs/toolkit';

const dialogSlice = createSlice({
  name: 'dialog',
  initialState: {
    isShowDialog: false,
  },
  reducers: {
    showDialog(state) {
      state.isShowDialog = true;
    },
    hideDialog(state) {
      state.isShowDialog = false;
    },
  },
});

export const dialogActions = dialogSlice.actions;
export default dialogSlice.reducer;
