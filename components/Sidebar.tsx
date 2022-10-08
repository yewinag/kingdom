import Image from 'next/image';
import { Genre } from './filter';
import { YearFilter } from './filter/Year';
import { Social } from './Social';

export const Sidebar = () => {
  return (
    <aside className="sidebar">
      <Social />
      <Genre />
      <YearFilter />
      <>
        <h3>Spronsor</h3>
        {/* <Image
          src="https://channelmyanmar.org/wp-content/uploads/2020/07/mmbus_ads_4.png"
          alt="spronsor"
          layout="fill"
        /> */}
      </>
    </aside>
  );
};
