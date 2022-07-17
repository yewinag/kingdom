import type { NextApiRequest, NextApiResponse } from 'next';
import { years } from '../../constants';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<string[]>
) {
  res.status(200).json(years);
}
