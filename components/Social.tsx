import { Button } from '@components';
import { StyledSocial } from '@styles';

export const Social = () => {
  return (
    <StyledSocial>
      <div className="social-share">
        <Button title="Share" className="facebook" />
        <Button title="Tweet" className="twitter" />
      </div>
    </StyledSocial>
  );
};
