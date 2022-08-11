import { createSlice } from '@reduxjs/toolkit';

const initialStateValue = '#000';
export const themeSlice = createSlice({
  name: 'theme',
  initialState: {value: initialStateValue},
  reducers:{
    setTheme: (state, action) => {
      state.value = action.payload;
    },
  }
});

export const {setTheme} = themeSlice.actions;
export default themeSlice.reducer;
