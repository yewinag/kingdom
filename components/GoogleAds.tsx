import Script from 'next/script';
import { useEffect } from 'react';
import styled from 'styled-components';
const client = 'ca-app-pub-3334163759744736';
const slot = '1188312524';
export const ComponentGoogleAds = () => {
  useEffect(() => {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }, []);
  return (
    <StyledAds>
      <Script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
      />
      <div className="ads-layout">
        <ins
          className="adsbygoogle"
          style={{ display: 'block' }}
          data-ad-client={client}
          data-ad-slot={slot}
          data-ad-format="auto"
          data-full-width-responsive="true"
        ></ins>
      </div>
    </StyledAds>
  );
};

const StyledAds = styled.div`
  width: 100%;
  height: 120px;
  margin: auto;
  .ads-layout {
    width: 750px;
    height: 100px;
  }
`;
