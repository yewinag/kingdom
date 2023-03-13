import { IAuth } from '@interface';
import { createSlice } from '@reduxjs/toolkit';

import { RootState } from '.';

interface IAuthState {
  auth: IAuth;
  loading: boolean;
}

const initialState: IAuthState = {
  auth: {
    device_id: '',
    expire: '',
    token: '',
    valid_til: ''
  },
  loading: false
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
