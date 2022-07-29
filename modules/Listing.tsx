import { useEffect, useState } from 'react';
import Link from 'next/link';
import { IMovies } from '../interface';
import { Random } from './Random';
import { Sidebar } from './Sidebar';
import useSWR from 'swr';

function Listing() {
  const [data, setData] = useState<IMovies[]>([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch('/api/movies')
      .then((res) => res.json())
      .then((data) => {
        setTimeout(() => {
          setData(data);
        }, 1000);
        setLoading(false);
      });
  }, []);
  return (
    <section className="main-content container">
      <Random />
      <section className="content-list">
        <h4 className="content-title">Content Recently Added</h4>
        <section className="listing-layout">
          <section className="content-body">
            {isLoading ? (
              <div>loading...</div>
            ) : (
              <>
                {data.map((item) => (
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
                ))}
              </>
            )}
          </section>
          <Sidebar />
        </section>
      </section>
      <article className="content-pagination">pagination</article>
    </section>
  );
}

export default Listing;
