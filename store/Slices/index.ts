import { AnyAction, Reducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import appReducer from './app';
import authReducer from './auth';
export * from './app';
export * from './auth';

const productReducer = combineReducers({
  app: appReducer,
  auth: authReducer
});

export type RootState = ReturnType<typeof productReducer>;

const rootReducer: Reducer = (state: RootState, action: AnyAction) => {
  if (action.type === 'RESET') {
    // reset state
    state = {} as RootState;
    // reset local storage
    localStorage.clear();
  }
  return productReducer(state, action);
};
export default rootReducer;
