import styled from 'styled-components';

export const StyledGenres = styled.div`
  width: 100%;
  h4 {
    color: ${p => p.theme.text_500};
  }
  .genre-list {
    max-height: 181px;
    overflow-y: scroll;
  }
  .genre-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: ${p => p.theme.text_500};
    cursor: pointer;
    &:hover {
      height: 26px;
      background: ${p => p.theme.nav};
      padding: 4px;
    }
  }
`;
