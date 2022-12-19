import { TOKEN } from '@configs';
import { API_URL } from '@utils';
interface Iprops {
  title?: string;
  alt?: string;
  icon?: JSX.Element;
  className?: string;
  children?: JSX.Element;
  onClick?: () => void;
  id?: number | string;
  episode?: number | string;
}
export const Button = (props: Iprops) => {
  const { title, icon, className, alt, children, onClick } = props;
  return (
    <button className={className} aria-label={alt || ''} onClick={onClick}>
      {icon || null}
      {title || children}
    </button>
  );
};

export const DownloadBtn = (props: Iprops) => {
  const { id, episode } = props;
  const url = `${API_URL}/seasons/${id}/episodes/${episode}`;
  const handleDownload = () => {
    // clientFetcher(url).then(res => console.log(res));
    fetch(url, {
      headers: { Authorization: TOKEN || '' }
    })
      .then(res => res.json())
      .then(json => json);
  };
  return <Button {...props} onClick={handleDownload} />;
};
