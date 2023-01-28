import { StyledSocial } from '@styles';
import { FacebookShareButton } from 'react-share';

import { Button } from './common';
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
        <Button className="react-share__ShareButton telgram">
          <a href={telLink} target={'_blank'} rel="noreferrer">
            <span>{`Telegram`}</span>
          </a>
        </Button>
      </div>
    </StyledSocial>
  );
};
