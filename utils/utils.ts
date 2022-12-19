import { TOKEN } from '@configs';

import { API_URL } from './config';

export const clientFetcher = async (path: string) => {
  const res = await fetch(`${API_URL}${path}`, {
    headers: { Authorization: TOKEN || '' }
  });
  if (!res) {
    throw new Error(`An error occurred while fetching the data.`);
  }
  return res.json();
};

export const fetcher = (path: string) =>
  fetch(`${API_URL}${path}`).then(res => res.json());
