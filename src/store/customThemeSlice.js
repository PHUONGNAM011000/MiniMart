import { createSlice } from '@reduxjs/toolkit';

const customThemeSlice = createSlice({
  name: 'customTheme',
  initialState: {
    isColorPrimary: true,
  },
  reducers: {
    colorChange(state) {
      state.isColorPrimary = !state.isColorPrimary;
    },
  },
});

export const ActionsCustomTheme = customThemeSlice.actions;
export default customThemeSlice.reducer;
