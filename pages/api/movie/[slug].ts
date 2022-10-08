import type { NextApiRequest, NextApiResponse } from 'next';

import { IMovie } from '../../../interface';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<IMovie>
) {
  // const { slug } = req.query;
  res.status(200).json({
    id: 0,
    cover_path: '',
    backdrop_path: '',
    show_type: '',
    name: '',
    mm_name: '',
    last_season: 0,
    last_episode: 0,
    created_at: ''
  });
}
