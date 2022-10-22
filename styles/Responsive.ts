import styled from 'styled-components';

export const Responsive = styled.main`
  .container {
    width: 1000px;
    margin: 0 auto;
  }
  .vs-md {
    display: block;
  }
  .vs-ms {
    display: none;
  }
  @media (max-width: ${p => p.theme.breakPoints.tablet}) {
    .container {
      width: 100%;
    }
    .vs-md {
      display: none;
    }
    .vs-ms {
      display: block;
    }
  }
`;
