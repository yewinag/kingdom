import styled from 'styled-components';

export const StyledCard = styled.article`
  cursor: pointer;
  width: 18%;
  margin-left: 1.5%;
  margin-bottom: 1.5%;
  &.small {
    width: 100%;
  }
  @media (max-width: ${p => p.theme.breakPoints.s_tablet}) {
    width: 23%;
    margin-left: 2%;
    margin-bottom: 2%;
  }
  @media (max-width: ${p => p.theme.breakPoints.mobile_520}) {
    width: 30%;
    margin-left: 3%;
    margin-bottom: 3%;
  }
  .image {
    position: relative;
    width: 100%;
    padding-top: 140%;
    span {
      border-radius: 6px;
    }
    img {
      width: 100%;
      height: 100%;
      transition: transform 0.5s, filter 1s ease-in-out;
      transform: scale(1.2);
    }
    .rating {
      position: absolute;
      bottom: 4px;
      right: 4px;
      background: ${p => p.theme.nav};
      display: flex;
      align-items: center;
      column-gap: 2px;
      padding: 4px 6px;
      border-radius: 2px;
      color: ${p => p.theme.primary_500};
      span {
        font-size: 11px;
        padding-left: 2px;
      }
    }
    .player {
      position: absolute;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      top: 0;
      svg {
        visibility: hidden;
      }
    }
  }

  .image:hover {
    img {
      filter: blur(0);
      transform: scale(1);
    }
    .player {
      svg {
        visibility: visible;
      }
    }
  }
  .info {
    .title {
      width: 100%;
      line-height: 22px;
      overflow: hidden;
      margin-top: 7px;
      color: ${p => p.theme.text_200};
      /* width: 126px; */
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    .desc {
      font-size: ${p => p.theme.fontSizes.small};
      color: ${p => p.theme.text_200};
      text-decoration: none;
      margin-top: 3px;
      width: 120px;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }
`;
