const { API_URL } = require('./config');

// export const clientFetcher = async (path: string) => {
//   const res = await fetch(`${API_URL}${path}`);

//   if (!res.ok) {
//     const error = new Error(`An error occurred while fetching the data.`);
//     throw error;
//   }
//   return res.json();
// };

export const fetcher = (path: string) =>
  fetch(`${API_URL}${path}`).then(res => res.json());
