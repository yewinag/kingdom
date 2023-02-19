import { ResponsiveAdUnit } from 'nextjs-google-adsense';
import styled from 'styled-components';
interface IProps {
  client: string;
  slot: string;
  currentPath: string;
}
export const ComponentGoogleAds = ({ client, slot, currentPath }: IProps) => {
  return (
    <StyledAds>
      <div key={currentPath} className="ads-layout">
        <ResponsiveAdUnit
          publisherId={client}
          slotId={slot}
          type={currentPath}
        />
      </div>
    </StyledAds>
  );
};

const StyledAds = styled.div`
  width: 100%;
  min-height: 120px;
  background: transparent;
  .ads-layout {
    margin: auto;
    min-height: 100px;
    overflow: hidden;
    text-align: left;
  }
`;
