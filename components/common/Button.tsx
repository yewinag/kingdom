import { StyledButtonWrapper } from '@styles';
import { fetcher } from '@utils';
import { useState } from 'react';
interface Iprops {
  title?: string;
  alt?: string;
  icon?: JSX.Element;
  className?: string;
  children?: JSX.Element;
  onClick?: () => void;
  id?: number | string;
  episode?: number | string;
  disable?: boolean;
}
export const Button = (props: Iprops) => {
  const { title, icon, className, alt, children, onClick, disable } = props;
  return (
    <button
      className={className}
      aria-label={alt || ''}
      onClick={onClick}
      disabled={disable}
    >
      {icon || null}
      {title || children}
    </button>
  );
};

export const DownloadBtn = (props: Iprops) => {
  const { id, episode } = props;
  const [loading, setLoading] = useState(false);

  const handleDownload = async () => {
    try {
      setLoading(true);
      const { data: res } = await fetcher(
        `/seasons/${id}/episodes/${episode}/drive-url`
      );
      await window.open(res?.drive_url || '', '_blank');
      setLoading(false);
    } catch (error) {
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };
  return (
    <StyledButtonWrapper>
      <Button {...props} disable={loading} onClick={handleDownload} />
    </StyledButtonWrapper>
  );
};
