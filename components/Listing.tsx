import { keywords, PATH_GENRES } from '@constants';
import {
  ArticleRow,
  ContentLayout,
  SeactionHeading,
  SectionLayout,
  SectionTitle,
  StyledHeading
} from '@styles';
import Link from 'next/link';

import { IMovie, IMovies } from '../interface';
import { ComponentCard } from './common';
// import { ComponentGoogleAds } from './GoogleAds';
import { Sidebar } from './Sidebar';
import { ComponentPlaceholder } from './Skeleton';
interface IProps {
  animes: IMovie[] | undefined;
  latest: IMovie[] | undefined;
  tv_shows: IMovie[] | undefined;
  movies: IMovie[] | undefined;
  data: IMovies;
}
export function Listing(props: IProps) {
  const { animes, latest, tv_shows, movies } = props;

  return (
    <ContentLayout>
      <StyledHeading>Content Recently Added</StyledHeading>
      <section className="listing-layout">
        <section className="content-body">
          <SectionLayout>
            <SectionTitle>
              <Link href={`${PATH_GENRES}${keywords.LATEST}`}>
                <SeactionHeading>Latest</SeactionHeading>
              </Link>
              <Link
                href={`${PATH_GENRES}${keywords.LATEST}`}
              >{`See More >>`}</Link>
            </SectionTitle>
            <ArticleRow>
              {latest ? (
                latest.map((item, index) => (
                  <ComponentCard item={item} key={index} />
                ))
              ) : (
                <ComponentPlaceholder />
              )}
            </ArticleRow>
          </SectionLayout>
          {/* google ads */}
          {/* <ComponentGoogleAds /> */}
          <SectionLayout>
            <SectionTitle>
              <Link href={`${PATH_GENRES}${keywords.ANIME}`}>
                <SeactionHeading>Animes </SeactionHeading>
              </Link>
              <Link
                href={`${PATH_GENRES}${keywords.ANIME}`}
              >{`See More >>`}</Link>
            </SectionTitle>
            <ArticleRow>
              {animes ? (
                animes.map((item, index) => (
                  <ComponentCard item={item} key={index} />
                ))
              ) : (
                <ComponentPlaceholder />
              )}
            </ArticleRow>
          </SectionLayout>
          {/* google ads */}
          {/* <ComponentGoogleAds /> */}
          <SectionLayout>
            <SectionTitle>
              <Link href={`${PATH_GENRES}${keywords.TV_SHOWS}`}>
                <SeactionHeading>TV Shows </SeactionHeading>
              </Link>
              <Link
                href={`${PATH_GENRES}${keywords.TV_SHOWS}`}
              >{`See More >>`}</Link>
            </SectionTitle>
            <ArticleRow>
              {tv_shows ? (
                tv_shows.map((item, index) => (
                  <ComponentCard item={item} key={index} />
                ))
              ) : (
                <ComponentPlaceholder />
              )}
            </ArticleRow>
          </SectionLayout>
          {/* google ads */}
          {/* <ComponentGoogleAds /> */}
          <SectionLayout>
            <SectionTitle>
              <Link href={`${PATH_GENRES}${keywords.MOVIES}`}>
                <SeactionHeading>Movies</SeactionHeading>
              </Link>
              <Link
                href={`${PATH_GENRES}${keywords.MOVIES}`}
              >{`See More >>`}</Link>
            </SectionTitle>
            <ArticleRow>
              {movies ? (
                movies.map((item, index) => (
                  <ComponentCard item={item} key={index} />
                ))
              ) : (
                <ComponentPlaceholder />
              )}
            </ArticleRow>
          </SectionLayout>
        </section>
        <Sidebar />
      </section>
    </ContentLayout>
  );
}
