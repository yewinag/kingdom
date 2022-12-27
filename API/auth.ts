import { ILogin } from '@interface';

import axiosClient from './axiosClient';

export const authApi = {
  login: (params: ILogin) => {
    const url = '/devices';
    return axiosClient.post(url, params);
  },
  downloadUrl: (id: number | string, episode: number | string) => {
    const url = `/seasons/${id}/episodes/${episode}`;
    return axiosClient.get(url);
  }
};
