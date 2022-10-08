import type { NextApiRequest, NextApiResponse } from 'next';

import { data } from '../../constants';

type Data = {
  thumb: string;
  title: string;
  slug: string;
  desc: string;
  rating: number;
  year: number;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data[]>
) {
  res.status(200).json(data);
}
