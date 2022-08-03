import { useEffect, useState } from 'react';
import Link from 'next/link';
import { IMovies } from '../interface';
import { Sidebar } from './Sidebar';
import useSWR from 'swr';
import { ComponentCard } from './common';
import { fetcher } from 'utils';

export default function Listing() {
  const { data, error } = useSWR<IMovies[]>([`/api/movies`], fetcher);
  if (error) return <p>server မှာကွိုင်တက်နေပီ ဟကောင်ရေ</p>;
  if (!data) return <p>loading....</p>;
  return (
    <section className="content-list">
      <h4 className="content-title">Content Recently Added</h4>
      <section className="listing-layout">
        <section className="content-body">
          {data &&
            data.map((item, index) => (
              <ComponentCard item={item} key={index} />
            ))}
        </section>
        <Sidebar />
      </section>
    </section>
  );
}
