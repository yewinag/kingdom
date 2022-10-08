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
import useSWR from 'swr';
import { fetcher } from 'utils';
const Home: NextPage = () => {
  const router = useRouter();
  const { slug } = router.query;
  // const { data, error } = useSWR<IMovies>([`/api/movie/${slug}`], fetcher);
  return <p>COMMING SOON</p>;
  // if (!data) return <div>ခဏစောင့်အံုး အဲ့ဇတ်ကားကိုသွားရှာနေပီ</div>;
  // return (
  //   <div className="detail">
  //     <div>
  //       <CardLayout>
  //         <>
  //           <div className="profile">
  //             <img src={data.thumb} alt={data.thumb} />
  //           </div>
  //           <div className="info">
  //             <h4>{data.title}</h4>
  //             <p>
  //               <span>{data.year}</span> <span>{data.rating}</span>
  //             </p>
  //           </div>
  //         </>
  //       </CardLayout>
  //       <CardLayout>
  //         <ComponentInfo />
  //       </CardLayout>
  //     </div>
  //     <div>
  //       <Social />
  //       <Genre />
  //       <YearFilter />
  //     </div>
  //   </div>
  // );
};

export default Home;
