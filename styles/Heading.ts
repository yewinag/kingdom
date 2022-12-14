import styled from 'styled-components';

export const StyledHeading = styled.h3`
  font-size: ${p => p.theme.fontSizes.large};
  font-weight: ${p => p.theme.fontWeights.bold};
  color: ${p => p.theme.text_200};
  border-bottom: solid 1px ${p => p.theme.border};
  padding: ${p => p.theme.space['16']};
  @media (max-width: ${p => p.theme.breakPoints.tablet}) {
    font-size: ${p => p.theme.fontSizes.title};
  }
`;

export const SectionTitle = styled.section`
  display: flex;
  justify-content: space-between;
  box-shadow: ${p => p.theme.shadow};
  padding-bottom: ${p => p.theme.space['10']};
  a {
    color: ${p => p.theme.primary_500};
    text-decoration: none;
    cursor: pointer;
  }
`;

export const SeactionHeading = styled.h4`
  font-size: ${p => p.theme.fontSizes.title};
  font-weight: ${p => p.theme.fontWeights.bold};
  color: ${p => p.theme.text_200};
  border-left: 3px solid ${p => p.theme.primary_500};
  padding-left: 10px;
  &:hover {
    color: ${p => p.theme.primary_500};
    cursor: pointer;
  }
`;

export const PageHeading = styled.h4`
  font-size: ${p => p.theme.fontSizes.title};
  font-weight: ${p => p.theme.fontWeights.bold};
  color: ${p => p.theme.text_200};
`;
