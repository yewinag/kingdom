import styled from 'styled-components';

export const StyledCard = styled.article`
  max-height: ${p => p.theme.heights.card};
  cursor: pointer;
  .image {
    height: ${p => p.theme.heights.img};
    position: relative;
    img {
      width: 100%;
      height: 100%;
      transition: transform 0.5s, filter 1s ease-in-out;
      transform: scale(1.2);
    }
    .player {
    }
    &.small {
      height: 180px;
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
        height: 142px;
      }
    }
  }
  @media (max-width: ${p => p.theme.breakPoints.lg_mobile}) {
    .image {
      &.small {
        height: 140px;
      }
    }
  }
  @media (max-width: ${p => p.theme.breakPoints.mobile}) {
    .image {
      &.small {
        height: 120px;
      }
    }
  }
`;
