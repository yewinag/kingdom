import { StyledCard } from '@styles';
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
              layout="intrinsic"
              width={126}
              height={194}
            />
            <span className="player"></span>
            {/* <span className="rating">7.8</span> */}
          </div>
        </a>
      </Link>
      <div className="info">
        <p className="title">{item.name}</p>
        <p className="desc">{item.mm_name}</p>
      </div>
    </StyledCard>
  );
};
