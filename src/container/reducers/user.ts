import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: { authenticated: false },
  reducers: {
    dispatchLogin: state => {
      state.authenticated = true;
    },
  },
});

export const { dispatchLogin } = userSlice.actions;

export default userSlice.reducer;
