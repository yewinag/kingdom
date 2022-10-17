import styled from 'styled-components';

export const Responsive = styled.main`
  .container {
    width: 1000px;
    margin: 0 auto;
  }
  @media (max-width: ${p => p.theme.breakPoints.tablet}) {
    .container {
      width: 100%;
    }
  }
  @media (max-width: ${p => p.theme.breakPoints.mobile}) {
    .container {
      width: 100%;
    }
  }
`;
