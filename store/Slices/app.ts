import { genreTypes } from '@interface';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '.';
interface IState {
  mobile: boolean;
  resize: boolean;
  genre: Record<genreTypes, number>[];
  loading: boolean;
}

const initialState: IState = {
  mobile: false,
  resize: false,
  genre: [],
  loading: false
};

const appSlice = createSlice({
  name: 'app',
  initialState: initialState,
  reducers: {
    resetApp: () => {
      return initialState;
    },
    setMobile: (state, action: PayloadAction<boolean>) => {
      state.mobile = action.payload;
    },
    updateGenre: (state, action: PayloadAction<any[]>) => {
      state.genre = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    }
  }
});

export const { resetApp, updateGenre, setLoading } = appSlice.actions;

export const selectApp = (state: RootState) => state.app;

export default appSlice.reducer;
