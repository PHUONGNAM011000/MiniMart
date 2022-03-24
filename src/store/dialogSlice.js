import { createSlice } from '@reduxjs/toolkit';

const dialogSlice = createSlice({
  name: 'dialog',
  initialState: {
    isShowDialog: false,
    idDialog: -1,
  },
  reducers: {
    showDialog(state, action) {
      state.isShowDialog = true;
      state.idDialog = action.payload;
    },
    hideDialog(state) {
      state.isShowDialog = false;
      state.idDialog = -1;
    },
  },
});

export const dialogActions = dialogSlice.actions;
export default dialogSlice.reducer;
