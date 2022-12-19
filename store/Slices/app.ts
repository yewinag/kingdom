import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '.';

interface IState {
  mobile: boolean;
  boxed: boolean;
  darkSidebar: boolean;
  sidebarPopup: boolean;
  sidebarIcons: boolean;
  collapsed: boolean;
  weakColor: boolean;
  optionDrawer: boolean;
  mobileDrawer: boolean;
  fullscreen: boolean;
  loading: boolean;
  spinning: boolean;
}

const initialState: IState = {
  mobile: false,
  boxed: false,
  darkSidebar: false,
  sidebarPopup: false,
  sidebarIcons: false,
  collapsed: false,
  weakColor: false,
  optionDrawer: false,
  mobileDrawer: false,
  fullscreen: false,
  loading: true,
  spinning: false
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
    }
  }
});

export const { resetApp } = appSlice.actions;

export const selectApp = (state: RootState) => state.app;

export default appSlice.reducer;
