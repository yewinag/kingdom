import styled from 'styled-components';

export const StyledSocial = styled.div`
  width: 100%;
  .social-share {
    display: flex;
    justify-content: space-between;
    align-items: center;
    column-gap: 10px;
    width: 100%;
    .react-share__ShareButton {
      flex: 1;
      border: 0;
      padding: 10px 0 !important;
      border-radius: 0 !important;
      &.facebook {
        background-color: #687ec3 !important;
      }
      &.twitter {
        background-color: #5bc2f7 !important;
      }
    }
  }
`;
