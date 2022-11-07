import styled from 'styled-components';

export const StyledCard = styled.article`
  max-height: ${p => p.theme.heights.card};
  cursor: pointer;
  .image {
    height: ${p => p.theme.heights.img};
    position: relative;
    width: ${p => p.theme.widths.img};
    /* background-color: #fad; */
    img {
      width: 100%;
      height: 100%;
      transition: transform 0.5s, filter 1s ease-in-out;
      transform: scale(1.2);
    }
    .player {
    }
    &.small {
      height: ${p => p.theme.heights.sm_img};
      width: ${p => p.theme.widths.sm_img};
    }
  }

  .image:hover {
    img {
      filter: blur(0);
      transform: scale(1);
    }
  }
  .info {
    .title {
      width: 100%;
      height: 17px;
      overflow: hidden;
      margin-top: 7px;
      color: ${p => p.theme.text_500};
      width: 126px;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    .desc {
      font-size: ${p => p.theme.fontSizes.small};
      color: ${p => p.theme.text_500};
      text-decoration: none;
      margin-top: 3px;
      width: 120px;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }
  @media (max-width: ${p => p.theme.breakPoints.mobile_520}) {
    .image {
      &.small {
        height: ${p => p.theme.heights.sm_img};
        width: ${p => p.theme.widths.sm_img};
      }
    }
  }
  @media (max-width: ${p => p.theme.breakPoints.lg_mobile}) {
    .image {
      height: ${p => p.theme.heights.m_img};
      width: ${p => p.theme.widths.sm_img};
      &.small {
        height: ${p => p.theme.heights.sm_img};
        width: ${p => p.theme.widths.m_img};
      }
    }
    .info {
      .title {
        width: 117px;
      }
      .desc {
        width: 117px;
      }
    }
  }
  @media (max-width: ${p => p.theme.breakPoints.mobile}) {
    .image {
      height: ${p => p.theme.heights.m_img};
      width: ${p => p.theme.widths.m_img};
      &.small {
        height: ${p => p.theme.heights.xs_img};
        width: ${p => p.theme.widths.xs_img};
      }
    }
    .info {
      .title {
        width: 100px;
      }
      .desc {
        width: 100px;
      }
    }
  }
`;
