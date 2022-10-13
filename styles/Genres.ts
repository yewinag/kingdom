import styled from 'styled-components';

export const StyledGenres = styled.div`
  width: 100%;
  .genre-list {
    max-height: 181px;
    overflow-y: scroll;
  }
  .genre-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    &:hover {
      height: 26px;
      background: #ccc;
      padding: 4px;
    }
  }
`;
