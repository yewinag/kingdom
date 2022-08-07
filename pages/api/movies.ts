import { IMovies, IListingMovies } from 'interface';
import type { NextApiRequest, NextApiResponse } from 'next';
import { data } from '../../constants';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<IListingMovies>
) {
  const { page, limit } = req.query;
  let start_point: number = 0;
  let end_point: number = 0;
  if (page && limit) {
    start_point = Number(page) * Number(limit) - Number(limit);
    end_point = Number(page) * Number(limit);
  }
  res.status(200).json({
    status: 'success',
    result: data.slice(start_point, end_point),
    total: data.length
  });
}
