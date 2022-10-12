import styled from 'styled-components';

export const Footer = () => {
  return (
    <StyledLayout>
      <footer className="footer container">
        <p>© 2022 All rights reserved</p>
        <p>SoulKingdom - Watch Movies Online Free</p>
      </footer>
    </StyledLayout>
  );
};

const StyledLayout = styled.div`
  background: ${p => p.theme.primary_500};
`;
