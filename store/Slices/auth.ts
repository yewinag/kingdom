import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '.';
import { IAuth } from '@interface';

interface IAuthState {
  auth: IAuth;
}

const initialState: IAuthState = {
  auth: {
    device_id: '',
    expire: '',
    token: '',
    valid_til: ''
  }
};

const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    resetAuth: () => {
      return initialState;
    }
  }
});

export const { resetAuth } = authSlice.actions;

export const selectAuth = (state: RootState) => state.auth;

export default authSlice.reducer;
