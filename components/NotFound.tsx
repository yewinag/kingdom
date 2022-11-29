import styled from 'styled-components';

export const ComponentNotFound = () => {
  return (
    <StyledLayout className="flex-center">
      <h2>ERROR 404</h2>
      <p>Not Content available</p>
    </StyledLayout>
  );
};

const StyledLayout = styled.div`
  min-height: 400px;
  background: ${p => p.theme.secondary_500};
  margin: ${p => p.theme.space['16']};
`;
