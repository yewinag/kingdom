import { IMovies } from '@interface';
import { StyledSidebar } from '@styles';
import Image from 'next/image';

import { Genre } from './filter';
import { Social } from './Social';
interface IProps {
  data?: IMovies;
}
export const Sidebar = ({ data }: IProps) => {
  return (
    <StyledSidebar>
      <Social />
      <Genre genres={data} />
      {/* <YearFilter /> */}
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
