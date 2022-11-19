import { StyledSocial } from '@styles';
import { FacebookShareButton, TwitterShareButton } from 'react-share';
interface IProps {
  fbLink: string;
  twLink: string;
}
export const Social = ({ fbLink, twLink }: IProps) => {
  return (
    <StyledSocial>
      <div className="social-share">
        <FacebookShareButton className="facebook" url={fbLink}>
          {`Share`}
        </FacebookShareButton>
        <TwitterShareButton className="twitter" url={twLink}>
          {`Tweet`}
        </TwitterShareButton>
      </div>
    </StyledSocial>
  );
};
