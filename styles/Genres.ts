import styled from 'styled-components';

export const StyledGenres = styled.div`
  width: 100%;
  h4 {
    color: ${p => p.theme.text_200};
  }
  .genre-list {
    max-height: 400px;
    overflow-y: scroll;
  }
  .genre-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 4px 10px;
    cursor: pointer;
    p {
      color: ${p => p.theme.text_200};
      text-transform: capitalize;
    }
    &.active,
    :hover {
      background: ${p => p.theme.nav};
      border-bottom: 0.5px solid ${p => p.theme.primary_500};
      p {
        color: ${p => p.theme.primary_500};
      }
    }
  }
`;
