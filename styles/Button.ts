import styled from 'styled-components';

export const StyledButtonWrapper = styled.div`
  button {
    cursor: pointer;
    min-width: 86px;
    border-radius: 4px;
    border: 0.5px solid ${p => p.theme.btn_color};
    padding: 2px 6px;
    p {
      color: ${p => p.theme.text_200};
    }
  }
`;
