import styled from 'styled-components';

export const StyledYear = styled.div`
  width: 100%;
  h4 {
    color: ${p => p.theme.text_500};
  }
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
      cursor: pointer;
      color: ${p => p.theme.text_500};

      &:hover {
        background: #ccc;
        color: inherit;
      }
    }
  }
`;
