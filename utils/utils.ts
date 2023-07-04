import { API_URL, TOKEN } from './config';

export const clientFetcher = async (path: string) => {
  const res = await fetch(`${API_URL}${path}`, {
    headers: { Authorization: TOKEN || '' }
  });
  if (!res) {
    throw new Error(`An error occurred while fetching the data.`);
  }
  return res.json();
};

export const fetcher = async (path: string) => {
  const res = await fetch(`${API_URL}${path}`, {
    headers: {
      Accept: 'application/json, text/plain, */*',
      // 'User-Agent': '*',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Headers': 'origin, content-type, accept',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': 'true',
      'Origin':'https://soulkingdom.net'
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
