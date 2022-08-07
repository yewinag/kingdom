const { API_URL } = require('./config');

export const fetcher = (path: string) =>
  fetch(`${API_URL}${path}`).then(res => res.json());
