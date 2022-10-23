import styled from 'styled-components';

export const StyledPaginate = styled.article`
  display: flex;
  justify-content: end;
  .paginate-layout {
    list-style: none;
    padding: 0;
    margin: 20px 0;
    display: flex;
    align-items: center;
    li {
      min-height: 26px;
      min-width: 26px;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      margin: 0 4px;
      a {
        display: flex;
      }
      &.active {
        background-color: ${p => p.theme.primary_500};
      }
      &:hover {
        color: ${p => p.theme.text_500};
      }
    }
  }
`;
