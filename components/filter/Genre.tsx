import { genres, PATH_GENRES } from '@constants';
import { StyledGenres } from '@styles';
import Link from 'next/link';

export const Genre = () => {
  return (
    <StyledGenres>
      <h4>Genres</h4>
      <div className="genre-list scroll-bar">
        {genres.map((item, index) => (
          <Link href={`${PATH_GENRES}${item.title}`} key={index}>
            <a>
              <div className="genre-item">
                <p>{item.title}</p>
                <p>{0}</p>
              </div>
            </a>
          </Link>
        ))}
      </div>
    </StyledGenres>
  );
};
