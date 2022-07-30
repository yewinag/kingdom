import type { NextApiRequest, NextApiResponse } from 'next';
import { data } from '../../../constants';
import { IMovies } from '../../../interface';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<IMovies>
) {
  const { slug } = req.query;
  const result = data.filter(item => item.slug === slug);
  res.status(200).json(result[0]);
}
