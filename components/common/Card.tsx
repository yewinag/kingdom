import Link from 'next/link';
import { IMovie } from '../../interface';
interface Iprops {
  item: IMovie;
}
export const ComponentCard = (props: Iprops) => {
  const { item } = props;
  return (
    <article className="item-card">
      <Link href={`movie/${item.name}`}>
        <div className="image">
          <img src={item.cover_path} />
          <span className="player"></span>
          {/* <span className="rating">7.8</span> */}
        </div>
      </Link>
      <div className="info">
        <p>{item.name}</p>
        <span>{item.mm_name}</span>
      </div>
    </article>
  );
};
