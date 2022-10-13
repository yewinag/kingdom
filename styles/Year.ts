import styled from 'styled-components';

export const StyledYear = styled.div`
  width: 100%;
  .year-list {
    width: 100%;
    display: grid;
    grid-template-columns: auto auto;
    gap: 8px;
    max-height: 146px;
    overflow-y: scroll;
    padding: 8px;
    button {
      border: 0;
      border-radius: 0;
      &:hover {
        background: #ccc;
        color: inherit;
      }
    }
  }
`;
