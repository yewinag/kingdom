import { AnyAction, configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk, { ThunkDispatch } from 'redux-thunk';

import reducer, { RootState } from './Slices';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['app', 'auth'],
  blackList: []
};

type AppState = ReturnType<typeof reducer>;

type TypedDispatch<T> = ThunkDispatch<T, any, AnyAction>;

// export const useAppDispatch = () => useDispatch<TypedDispatch<AppState>>();

// export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;

const persistedReducer = persistReducer<RootState>(persistConfig, reducer);
const store = configureStore({
  reducer: persistedReducer,
  preloadedState: {},
  middleware: [thunk]
});

export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;

export default store;

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<TypedDispatch<AppState>>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
