import { ads_url, PATH_GENRES } from '@constants';
import { genreTypes, IAds } from '@interface';
import { selectApp, setLoading, updateGenre } from '@store';
import { FlexCenter, StyledGenres } from '@styles';
import { clientFetcher, DEFAULT_PAGE } from '@utils';
import {
  // ComponentAds,
  ComponentSidebarAds
  // ComponentVideoAds
} from 'components/GoogleAds';
import { enumAds } from 'interface/enum';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { BeatLoader } from 'react-spinners';
interface IProps {
  ads?: IAds[];
}
export const Genre = ({ ads }: IProps) => {
  const { query } = useRouter();
  const { genre, loading } = useSelector(selectApp);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchGenre();
  }, []);

  const sideAds = ads?.find(ads => ads.name === enumAds.WEB_HOME_SIDE_BANNER);

  const fetchGenre = async () => {
    if (genre && genre.length !== 0) return;

    try {
      dispatch(setLoading(true));
      const res = await clientFetcher(`/show-total`);
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
        <BeatLoader color={'#D12729'} />
      </FlexCenter>
    );
  }

  return (
    <StyledGenres>
      <h4>Genres</h4>
      <div className="genre-list scroll-bar">
        {genre.length > 0 &&
          genre.map((item: Record<genreTypes, number>, index: any) => (
            <Link
              href={`${PATH_GENRES}${Object.keys(item)}/${DEFAULT_PAGE}`}
              key={index}
            >
              <a>
                <div
                  className={
                    Object.keys(item)[0] === query?.genre
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
      <ComponentSidebarAds img_url={sideAds?.image} url={ads_url} />
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
