import { createSlice } from '@reduxjs/toolkit';

const initialStateValue = {name: '', age: 0, email: ''};
export const userSlice = createSlice({
  name: 'user',
  initialState: {value: initialStateValue},
  reducers:{
    setUser: (state, action) => {
      state.value = action.payload;
    },
    logout: (state) => {
      state.value = initialStateValue;
    }
  }
});

export const {setUser, logout} = userSlice.actions;
export default userSlice.reducer;
