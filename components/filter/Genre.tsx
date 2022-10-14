import { IMovies } from '@interface';
import { StyledGenres } from '@styles';
interface IProps {
  genres?: IMovies;
}
export const Genre = ({ genres }: IProps) => {
  return (
    <StyledGenres>
      <h4>Genres</h4>
      <div className="genre-list scroll-bar">
        {genres &&
          Object.entries(genres).map((item, index) => (
            <div className="genre-item" key={index}>
              <p>{item[0]}</p>
              <p>{item[1].length}</p>
            </div>
          ))}
      </div>
    </StyledGenres>
  );
};
