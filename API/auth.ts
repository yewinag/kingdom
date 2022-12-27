import axiosClient from './axiosClient';
import { ILogin } from '@interface';

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
