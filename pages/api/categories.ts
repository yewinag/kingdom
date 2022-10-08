import type { NextApiRequest, NextApiResponse } from 'next';

import { categories } from '../../constants';

type Data = {
  title: string;
  count: number;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data[]>
) {
  res.status(200).json(categories);
}
