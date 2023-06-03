import { PATH_GENRES, ads_url } from '@constants';
import { genreTypes } from '@interface';
import { selectApp, setLoading, updateGenre } from '@store';
import { FlexCenter, StyledGenres } from '@styles';
import { fetcher } from '@utils';
import {
  ComponentAds,
  ComponentSidebarAds,
  ComponentVideoAds
} from 'components/GoogleAds';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { BeatLoader } from 'react-spinners';

export const Genre = () => {
  const {
    query: { search }
  } = useRouter();
  const { genre, loading } = useSelector(selectApp);
  const dispatch = useDispatch();

  useEffect(() => {
    if (genre.length === 0) {
      fetchGenre();
    }
  });

  const fetchGenre = async () => {
    try {
      dispatch(setLoading(true));
      const res = await fetcher(`/show-total`);
      await dispatch(updateGenre(res));
      dispatch(setLoading(false));
    } catch (err) {
      dispatch(setLoading(false));
    } finally {
      dispatch(setLoading(false));
    }
  };
  if (loading) {
    return (
      <FlexCenter>
        <BeatLoader color={'#D12729'} />;
      </FlexCenter>
    );
  }

  return (
    <StyledGenres>
      <h4>Genres</h4>
      <div className="genre-list scroll-bar">
        {genre.length > 0 &&
          genre.map((item: Record<genreTypes, number>, index: any) => (
            <Link href={`${PATH_GENRES}${Object.keys(item)}`} key={index}>
              <a>
                <div
                  className={
                    Object.keys(item)[0] === search
                      ? 'genre-item active'
                      : 'genre-item'
                  }
                >
                  <p>{Object.keys(item)}</p>
                  <p>{Object.values(item)}</p>
                </div>
              </a>
            </Link>
          ))}
      </div>
      <ComponentSidebarAds img_url="/jdbyg-sidebar.gif" url={ads_url} />
      {/* <ComponentSidebarAds
        img_url="/banner.gif"
        url={'https://soulkingdom.net'}
      />
      <ComponentVideoAds
        img_url="/animation.gif.mp4"
        url={'https://soulkingdom.net'}
      /> */}
    </StyledGenres>
  );
};
