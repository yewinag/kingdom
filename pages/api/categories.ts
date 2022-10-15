import { genres } from '@constants';
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  title: string;
  count: number;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data[]>
) {
  res.status(200).json(genres);
}
