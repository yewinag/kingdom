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
      /* border-radius: 0 !important; */
      border-radius: ${p => p.theme.space['4']};
      &.facebook {
        background-color: #687ec3 !important;
      }
      &.telgram {
        background-color: #2aabee !important;
      }
    }
  }
`;
