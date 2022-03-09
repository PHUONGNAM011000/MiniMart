import { createSlice } from '@reduxjs/toolkit';

const menuSlice = createSlice({
  name: 'menu',
  initialState: {
    isShow: false,
  },
  reducers: {
    showMenu(state) {
      state.isShow = true;
    },
    hideMenu(state) {
      state.isShow = false;
    },
  },
});

export const ActionsMenu = menuSlice.actions;
export default menuSlice.reducer;
