import type { NextPage } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { CardLayout } from '../../components/common/CardLayout';
import { ComponentInfo } from '../../components/common/Info';
import { Genre } from '../../components/filter';
import { YearFilter } from '../../components/filter/Year';
import { Social } from '../../components/Social';
import { IMovies } from '../../interface';

const Home: NextPage = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [detail, setDetail] = useState<IMovies>();
  useEffect(() => {
    console.log(slug);
    if (slug) {
      fetch(`/api/movie/${slug}`)
        .then(res => res.json())
        .then(json => {
          setTimeout(() => {
            setDetail(json);
          }, 1000);
        });
    }
  }, [slug]);
  if (!detail) return <div>ခဏစောင့်အံုး အဲ့ဇတ်ကားကိုသွားရှာနေပီ</div>;
  return (
    <div className="detail">
      <div>
        <CardLayout>
          <>
            <div className="profile">
              <img src={detail.thumb} alt={detail.thumb} />
            </div>
            <div className="info">
              <h4>{detail.title}</h4>
              <p>
                <span>{detail.year}</span> <span>{detail.rating}</span>
              </p>
            </div>
          </>
        </CardLayout>
        <CardLayout>
          <ComponentInfo />
        </CardLayout>
      </div>
      <div>
        <Social />
        <Genre />
        <YearFilter />
      </div>
    </div>
  );
};

export default Home;
