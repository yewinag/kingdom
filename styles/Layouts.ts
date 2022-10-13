import styled from 'styled-components';

export const StyledLayouts = styled.section``;

export const SectionLayout = styled.section`
  margin-top: ${p => p.theme.space['16']};
`;

export const ArticleRow = styled.section`
  display: flex;
  flex-wrap: wrap;
  column-gap: ${p => p.theme.space['16']};
  row-gap: ${p => p.theme.space['32']};
  max-height: ${p => p.theme.heights.row};
  overflow: hidden;
`;

export const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const FooterLayout = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
