import { StyledCard } from '@styles';
import { IconPlay, IconStart } from 'components/icons';
import Image from 'next/image';
import Link from 'next/link';

import { IMovie } from '../../interface';
interface Iprops {
  item: IMovie;
  small?: boolean;
}
export const ComponentCard = (props: Iprops) => {
  const { item, small } = props;

  return (
    <StyledCard>
      <Link href={`movie/${item.id}`}>
        <a>
          <div className={small ? 'image small' : 'image'}>
            <Image
              blurDataURL="/poster.png"
              src={item.cover_path || '/poster.png'}
              alt={item.name}
              layout="fill"
              // layout="intrinsic"
              // width={126}
              // height={194}
            />
            <span className="player">
              <IconPlay />
            </span>
            <span className="rating">
              <IconStart /> <span> 7.8</span>
            </span>
          </div>
        </a>
      </Link>
      <div className="info">
        <p className="title">{item.mm_name}</p>
        <p className="desc">{`2022`}</p>
      </div>
    </StyledCard>
  );
};
