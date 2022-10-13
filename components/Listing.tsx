import {
  SectionTitle,
  StyledHeading,
  SectionLayout,
  ArticleRow,
  SeactionHeading
} from '@styles';
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
      <StyledHeading>Content Recently Added</StyledHeading>
      <section className="listing-layout">
        <section className="content-body">
          <SectionLayout>
            <SectionTitle>
              <SeactionHeading>Latest</SeactionHeading>
              <Link href={'/'}>{`see more >>`}</Link>
            </SectionTitle>
            <ArticleRow>
              {latest &&
                latest.map((item, index) => (
                  <ComponentCard item={item} key={index} />
                ))}
            </ArticleRow>
          </SectionLayout>
          <SectionLayout>
            <SectionTitle>
              <SeactionHeading>Animes </SeactionHeading>
              <Link href={'/'}>{`see more >>`}</Link>
            </SectionTitle>
            <ArticleRow>
              {animes &&
                animes.map((item, index) => (
                  <ComponentCard item={item} key={index} />
                ))}
            </ArticleRow>
          </SectionLayout>
          <SectionLayout>
            <SectionTitle>
              <SeactionHeading>TV Shows </SeactionHeading>
              <Link href={'/'}>{`see more >>`}</Link>
            </SectionTitle>
            <ArticleRow>
              {tv_shows &&
                tv_shows.map((item, index) => (
                  <ComponentCard item={item} key={index} />
                ))}
            </ArticleRow>
          </SectionLayout>
          <SectionLayout>
            <SectionTitle>
              <SeactionHeading>Movies</SeactionHeading>
              <Link href={'/'}>{`see more >>`}</Link>
            </SectionTitle>
            <ArticleRow>
              {movies &&
                movies.map((item, index) => (
                  <ComponentCard item={item} key={index} />
                ))}
            </ArticleRow>
          </SectionLayout>
        </section>
        <Sidebar />
      </section>
    </section>
  );
}
