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
    fetch(url, {
      headers: {
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2NzIwNzAwMjksIm9yaWdfaWF0IjoxNjcyMDY2NDI5LCJ1c2VyX2lkIjo1MiwidmFsaWRfdGlsIjoxNjc5ODQyNDI5fQ.7IQNKCbTi5QIv0cXdkVQvifLjbSyn7zFFtXLOD5-2g8'
      }
    })
      .then(res => res.json())
      /* eslint-disable */
      .then(json => console.info(json));
  };
  return <Button {...props} onClick={handleDownload} />;
};
