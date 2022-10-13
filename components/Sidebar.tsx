import { StyledSidebar } from '@styles';
import Image from 'next/image';

import { Genre } from './filter';
import { YearFilter } from './filter/Year';
import { Social } from './Social';
export const Sidebar = () => {
  return (
    <StyledSidebar>
      <Social />
      <Genre />
      <YearFilter />
      <>
        <h3>Spronsor</h3>
        <Image
          src="/poster.png"
          alt="spronsor"
          layout="intrinsic"
          width={200}
          height={500}
        />
      </>
    </StyledSidebar>
  );
};
