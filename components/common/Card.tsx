import { defaultImage, keywords, PATH_MOVIE, PATH_TVSHOWS } from '@constants';
import { StyledCard } from '@styles';
import { IconPlay, IconStart } from 'components/icons';
import Image from 'next/image';
import Link from 'next/link';

import { enumShowType, IMovie } from '../../interface';
interface Iprops {
  item: IMovie;
  small?: boolean;
  genre?: string;
}
export const ComponentCard = (props: Iprops) => {
  const { item, small } = props;
  const pathName =
    item.show_type === enumShowType.TV_SHOW ? PATH_TVSHOWS : PATH_MOVIE;
  const year = item.released_date ? item.released_date.split('-')[0] : '----';
  return (
    <StyledCard className={small ? 'small' : ''}>
      <Link href={`${pathName}${item.id}`}>
        <a>
          <div className="image">
            <Image
              blurDataURL="/poster.png"
              src={item.cover_path || defaultImage}
              alt={item.name}
              layout="fill"
              className="next-image"
            />
            <span className="player">
              <IconPlay />
            </span>
            <span className="rating">
              <IconStart /> <span> {`${item.rating}`}</span>
            </span>
          </div>
        </a>
      </Link>
      <div className="info">
        <p className="title">{item.mm_name}</p>
        <p className="desc">{year}</p>
      </div>
    </StyledCard>
  );
};
