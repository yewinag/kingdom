import styled from 'styled-components';

export const StyledSidebar = styled.article`
  display: flex;
  flex-direction: column;
  align-items: baseline;
  row-gap: 20px;
  padding: 20px;
  width: 260px;
  h3 {
    color: ${p => p.theme.text_500};
  }
  // responsive
  @media (max-width: ${p => p.theme.breakPoints.tablet}) {
    display: none;
  }
`;
