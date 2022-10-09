import Link from 'next/link';

import { IMovie } from '../interface';
import { ComponentCard } from './common';
import { Sidebar } from './Sidebar';
interface IProps {
  animes: IMovie[] | undefined;
  latest: IMovie[] | undefined;
  tv_shows: IMovie[] | undefined;
  movies: IMovie[] | undefined;
}
export function Listing(props: IProps) {
  const { animes, latest, tv_shows, movies } = props;
  return (
    <section className="content-list">
      <h4 className="content-title">Content Recently Added</h4>
      <section className="listing-layout">
        <section className="content-body">
          <section>
            <div className="section-header">
              <h4>Latest </h4>
              <Link href={'/'}>{`see more >>`}</Link>
            </div>
            <article className="section">
              {latest &&
                latest.map((item, index) => (
                  <ComponentCard item={item} key={index} />
                ))}
            </article>
          </section>
          <section>
            <div className="section-header">
              <h4>Animes </h4>
              <Link href={'/'}>{`see more >>`}</Link>
            </div>
            <article className="section">
              {animes &&
                animes.map((item, index) => (
                  <ComponentCard item={item} key={index} />
                ))}
            </article>
          </section>
          <section>
            <div className="section-header">
              <h4>TV Shows </h4>
              <Link href={'/'}>{`see more >>`}</Link>
            </div>
            <article className="section">
              {tv_shows &&
                tv_shows.map((item, index) => (
                  <ComponentCard item={item} key={index} />
                ))}
            </article>
          </section>
          <section>
            <div className="section-header">
              <h4>Movies </h4>
              <Link href={'/'}>{`see more >>`}</Link>
            </div>
            <article className="section">
              {movies &&
                movies.map((item, index) => (
                  <ComponentCard item={item} key={index} />
                ))}
            </article>
          </section>
        </section>
        <Sidebar />
      </section>
    </section>
  );
}
