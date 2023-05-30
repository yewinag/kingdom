import { defaultImage } from '@constants';
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
  const { item, small } = props;
  const year = item.released_date ? item.released_date.split('-')[0] : '----';
  return (
    <StyledCard className={small ? 'small' : ''}>
      <Link href={`/${item.show_type}/${item.id}`}>
        <a>
          <div className="image">
            <Image
              blurDataURL="/soul-kingdom-placeholder.svg"
              src={item.cover_path || defaultImage}
              alt={item.name}
              layout="fill"
              className="next-image"
              placeholder="blur"
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
        <p className="title">{item.name}</p>
        <p className="desc">{year}</p>
      </div>
    </StyledCard>
  );
};
