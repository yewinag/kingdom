import { StyledSocial } from '@styles';
import { FacebookShareButton, TelegramShareButton } from 'react-share';
interface IProps {
  fbLink: string;
  telLink: string;
}
export const Social = ({ fbLink, telLink }: IProps) => {
  return (
    <StyledSocial>
      <div className="social-share">
        <FacebookShareButton className="facebook" url={fbLink}>
          {`Share`}
        </FacebookShareButton>
        <TelegramShareButton className="telgram" url={telLink}>
          {`Telegram`}
        </TelegramShareButton>
      </div>
    </StyledSocial>
  );
};
