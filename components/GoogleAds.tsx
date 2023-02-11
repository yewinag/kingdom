// import Script from 'next/script';
import { useEffect } from 'react';
import styled from 'styled-components';
interface IProps {
  client: string;
  slot: string;
  path: string;
}
export const ComponentGoogleAds = ({ client, slot, path }: IProps) => {
  useEffect(() => {
    const ads = document.getElementsByClassName('adsbygoogle').length;
    for (let i = 0; i < ads; i++) {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (e: any) {
        throw new Error(e);
      }
    }
  }, [path]);
  return (
    <StyledAds>
      <div key={path} className="ads-layout">
        <ins
          className="adsbygoogle"
          style={{ display: 'inline-block', width: '728px', height: '90px' }}
          data-ad-client={client}
          data-ad-slot={slot}
        ></ins>
      </div>
    </StyledAds>
  );
};

const StyledAds = styled.div`
  width: 100%;
  min-height: 120px;

  background: #ddd;
  .ads-layout {
    margin: auto;
    /* width: 750px; */
    min-height: 100px;
  }
`;
