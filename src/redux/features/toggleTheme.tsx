import { createSlice } from '@reduxjs/toolkit';

const defaultDark = window.matchMedia(
  '(prefers-color-scheme: dark)',
).matches;

const localStorageTheme = localStorage.getItem('theme');

export const toggleThemeSlice = createSlice({
  name: 'toggleTheme',
  initialState: {
    value: !localStorageTheme
      ? defaultDark
        ? 'dark'
        : 'light'
      : localStorageTheme,
  },
  reducers: {
    dark: (state) => {
      state.value = 'dark';
      localStorage.setItem('theme', 'dark');
    },
    light: (state) => {
      state.value = 'light';
      localStorage.setItem('theme', 'light');
    },
  },
});

// Action creators are generated for each case reducer function
export const { dark, light } = toggleThemeSlice.actions;

export default toggleThemeSlice.reducer;
