import { defaultImage, keywords, PATH_MOVIE, PATH_TVSHOWS } from '@constants';
import { StyledCard } from '@styles';
import { IconPlay, IconStart } from 'components/icons';
import Image from 'next/image';
import Link from 'next/link';

import { IMovie } from '../../interface';
interface Iprops {
  item: IMovie;
  small?: boolean;
  genre?: string;
}
export const ComponentCard = (props: Iprops) => {
  const { item, small, genre } = props;
  const pathName = genre === keywords.TV_SHOWS ? PATH_TVSHOWS : PATH_MOVIE;
  const year = item.released_date ? item.released_date.split('-')[0] : '----';
  return (
    <StyledCard>
      <Link href={`${pathName}${item.id}`}>
        <a>
          <div className={small ? 'image small' : 'image'}>
            <Image
              blurDataURL="/poster.png"
              src={item.cover_path || defaultImage}
              alt={item.name}
              layout="fill"
              className="next-image"
              // layout="intrinsic"
              // width={126}
              // height={194}
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
