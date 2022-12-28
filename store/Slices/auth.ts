import { IAuth, ILogin } from '@interface';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { authApi } from 'API';

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

export const login = createAsyncThunk<IAuth, ILogin>(
  'auth/login',
  async (values: ILogin, { rejectWithValue }) => {
    try {
      const res = await authApi.login(values);
      return res.data as IAuth;
    } catch (err: any) {
      return rejectWithValue(err);
    }
  }
);
export const getInfo = createAsyncThunk<any, any>(
  'auth/getInfo',
  async (values: any, { rejectWithValue }) => {
    try {
      const res = await authApi.downloadUrl(1, 2);
      return res.data as any;
    } catch (err: any) {
      return rejectWithValue(err);
    }
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    resetAuth: () => {
      return initialState;
    }
  },
  extraReducers: builder => {
    builder.addCase(login.fulfilled, (state, action: { payload: IAuth }) => {
      state.auth = action.payload;
      state.loading = false;
    });

    builder.addCase(login.pending, state => {
      state.loading = true;
    });
  }
});

export const { resetAuth } = authSlice.actions;

export const selectAuth = (state: RootState) => state.auth;

export default authSlice.reducer;
