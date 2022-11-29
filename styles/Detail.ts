import styled from 'styled-components';

export const DetailStyles = styled.div`
  .listing-layout {
    display: flex;
    align-items: flex-start;
  }
  .content-body {
    width: 740px;
    padding: 0 20px;
    border-right: solid 1px ${p => p.theme.border};
    min-height: 82vh;
  }
  .content-body {
    display: flex;
    flex-direction: column;
    row-gap: ${p => p.theme.space['32']};
    .detail {
      padding: ${p => p.theme.space['16']};
      background: ${p => p.theme.secondary_500};
      display: flex;
      column-gap: ${p => p.theme.space['20']};
      border-radius: ${p => p.theme.space['4']};
      .info {
        display: flex;
        flex-direction: column;
        row-gap: 10px;

        .small {
          font-style: italic;
          font-size: ${p => p.theme.fontSizes.small};
        }
        .type {
          display: flex;
          column-gap: 4px;
          row-gap: 5px;
          flex-wrap: wrap;
          span {
            font-size: ${p => p.theme.fontSizes.small};
            padding: 4px 6px;
            border-radius: 4px;
            border: 0.5px solid ${p => p.theme.text_600};
            cursor: pointer;
          }
        }
      }
    }
    .description {
      display: flex;
      flex-direction: column;
      row-gap: ${p => p.theme.space['20']};
      align-items: baseline;
      background: ${p => p.theme.secondary_500};
      padding: ${p => p.theme.space['16']};
      border-radius: ${p => p.theme.space['4']};
    }
    .download {
      display: flex;
      flex-direction: column;
      row-gap: ${p => p.theme.space['20']};
      /* align-items: baseline; */
      background: ${p => p.theme.secondary_500};
      padding: ${p => p.theme.space['16']};
      border-radius: ${p => p.theme.space['4']};
      header {
        display: flex;
        h4 {
          flex: 1;
          color: ${p => p.theme.text_500};
        }
      }
      .link-title {
        display: flex;
        padding: 10px 0;
        border-bottom: 1px solid ${p => p.theme.border};
        p {
          flex: 1;
        }
      }
    }
  }
  @media (max-width: ${p => p.theme.breakPoints.tablet}) {
    .content-body {
      width: 100%;
      border-right: 0;
      padding: ${p => p.theme.space['16']};
    }
  }
`;
