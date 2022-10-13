import styled from 'styled-components';

export const StyledSocial = styled.div`
  width: 100%;
  .social-share {
    display: flex;
    justify-content: space-between;
    align-items: center;
    column-gap: 10px;
    width: 100%;
    button {
      flex: 1;
      border: 0;
      padding: 10px 0;
      border-radius: 0;
      &.facebook {
        background: #687ec3;
      }
      &.twitter {
        background: #5bc2f7;
      }
    }
  }
`;
