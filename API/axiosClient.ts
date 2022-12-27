import { store } from '@store';
import axios from 'axios';

import queryString from 'query-string';

const axiosClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_HOST,

  headers: {
    'Content-Type': 'application/json'
  },
  paramsSerializer: {
    serialize: params => queryString.stringify(params)
  }
});

axiosClient.interceptors.request.use(config => {
  config.headers = config.headers ?? {};
  // @ts-ignore
  const token = store.getState()?.auth?.auth?.token || '';

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

axiosClient.interceptors.response.use(
  response => {
    return response;
  },
  async (error: any) => {
    // Handle errors
    // refresh token
    // if (error.response && error.response.status === 401) {
    //     //refreshToken
    //     const refreshTk = store.getState()._persist.rehydrated;
    //     if (refreshTk) {
    //         const refreshTokenBody = { refreshToken: refreshTk };
    //         try {
    //             const config = {
    //                 headers: {
    //                     "Authorization": refreshTk,
    //                 },
    //             };
    //             const res = await axios.post(
    //                 process.env.NEXT_PUBLIC_HOST + "refresh",
    //                 refreshTokenBody,
    //                 config
    //             );
    //             if (res.status === 200) {
    //                 // store.dispatch(reStoreAuth(res.data));
    //                 const originalRequest = error.config;
    //                 const newToken = res.data.token;
    //                 originalRequest.headers["Authorization"] = newToken;
    //                 return Promise.resolve(axiosClient(originalRequest));
    //             }
    //         } catch (err: any) {
    //             console.log(err);
    //         }
    //     } else {
    //         console.log('there is no refresh token')
    //     }
    // }
    throw error;
  }
);

export default axiosClient;
