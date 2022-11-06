import { StyledSocial } from '@styles';
import { HOST_PATH } from '@utils';
import { FacebookShareButton, TwitterShareButton } from 'react-share';
export const Social = () => {
  return (
    <StyledSocial>
      <div className="social-share">
        <FacebookShareButton className="facebook" url={HOST_PATH || ''}>
          {`Share`}
        </FacebookShareButton>
        <TwitterShareButton className="twitter" url={HOST_PATH || ''}>
          {`Tweet`}
        </TwitterShareButton>
      </div>
    </StyledSocial>
  );
};
