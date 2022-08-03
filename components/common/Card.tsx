import Link from 'next/link';
import { IMovies } from '../../interface';
interface Iprops {
  item: IMovies;
}
export const ComponentCard = (props: Iprops) => {
  const { item } = props;
  return (
    <article className="item-card">
      <Link href={`movie/${item.slug}`}>
        <div className="image">
          <img src={item.thumb} />
          <span className="player"></span>
          {/* <span className="rating">7.8</span> */}
        </div>
      </Link>
      <div className="info">
        <p>{item.title}</p>
        <span>{item.year}</span>
      </div>
    </article>
  );
};
