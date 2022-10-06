import { useEffect, useState } from 'react';
import Link from 'next/link';
import { IMovie, IMovies } from '../interface';
import { Sidebar } from './Sidebar';
import useSWR from 'swr';
import { ComponentCard } from './common';
import { fetcher } from 'utils';
import Image from 'next/image';

interface IProps {
  animes: IMovie[] | undefined;
  latest: IMovie[] | undefined;
  tv_shows: IMovie[] | undefined;
  movies: IMovie[] | undefined;
}
export default function Listing(props: IProps) {
  const { animes, latest, tv_shows, movies } = props;
  // if (error) return <p>server မှာကွိုင်တက်နေပီ ဟကောင်ရေ</p>;
  // if (!data) return <p>loading....</p>;
  return (
    <section className="content-list">
      <h4 className="content-title">Content Recently Added</h4>
      <section className="listing-layout">
        <section className="content-body">
          <section>
            <div className="section-header">
              <h5>Latest </h5>
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
              <h5>Animes </h5>
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
              <h5>TV Shows </h5>
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
              <h5>Movies </h5>
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
