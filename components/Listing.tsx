import { useEffect, useState } from 'react';
import Link from 'next/link';
import { IMovies } from '../interface';
import { Sidebar } from './Sidebar';
import useSWR from 'swr';
import { ComponentCard } from './common';

function Listing() {
  const [data, setData] = useState<IMovies[]>([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch('/api/movies')
      .then(res => res.json())
      .then(data => {
        setTimeout(() => {
          setData(data);
        }, 1000);
        setLoading(false);
      });
  }, []);
  return (
    <section className="content-list">
      <h4 className="content-title">Content Recently Added</h4>
      <section className="listing-layout">
        <section className="content-body">
          {isLoading ? (
            <div>loading...</div>
          ) : (
            <>
              {data.map((item, index) => (
                <ComponentCard item={item} key={index} />
              ))}
            </>
          )}
        </section>
        <Sidebar />
      </section>
    </section>
  );
}

export default Listing;
