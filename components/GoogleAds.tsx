import Script from 'next/script';
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
        <ins
          className="adsbygoogle"
          style={{ display: 'block' }}
          data-ad-client={client}
          data-ad-slot={slot}
          data-ad-format="auto"
          data-full-width-responsive="true"
        >
          {' '}
        </ins>
        <Script id="load-ads">
          (adsbygoogle = window.adsbygoogle || []).push({})
        </Script>
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
