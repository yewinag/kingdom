import { API_URL } from './config';

export const clientFetcher = async (path: string) => {
  const res = await fetch(`${API_URL}${path}`);
  if (!res) {
    throw new Error(`An error occurred while fetching the data.`);
  }
  return res.json();
};

export const fetcher = async (path: string) => {
  const res = await fetch(`${API_URL}${path}`, {
    headers: {
      Accept: 'application/json, text/plain, */*'
      // 'User-Agent': '*'
    }
  });
  if (res.status !== 200) {
    throw new Error(`An error occurred while fetching the data.`);
  }
  if (res.status === 200) {
    return res.json();
  }
};

export const generateEpisodesByNumber = (episode: number) => {
  const episodes = Array.from(Array(episode), (_, i) => i + 1);
  return Promise.resolve(episodes);
};

export const checkUrlVideo = (url: string) => {
  return url.lastIndexOf('.mp4') !== -1;
};
