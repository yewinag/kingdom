import styled from 'styled-components';

export const SectionLayout = styled.section`
  margin-top: ${p => p.theme.space['4']};
  margin-bottom: ${p => p.theme.space['4']};
`;

export const ArticleRow = styled.section`
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
  padding: 10px 0;
`;
export const PageLoading = styled.div`
  min-height: 100vh;
  background: #000; // inital dark
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const FlexCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: ${p => p.theme.heights.row};
`;
export const FooterLayout = styled.footer`
  min-height: 54px;
  margin-top: ${p => p.theme.space['20']};
  padding: 0 ${p => p.theme.space['20']};
  article {
    padding: 16px 0;
  }
  p {
    color: ${p => p.theme.text_gray} !important;
    font-size: ${p => p.theme.fontSizes.small};
    /* padding: 10px 0; */
  }
`;
export const SidebarLayout = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: baseline;
  row-gap: 20px;
  padding: 20px;
  width: 260px;
`;
export const SearchListing = styled.section`
  display: flex;
  flex-wrap: wrap;
`;
export const SearchInputLayout = styled.div`
  padding-top: 60px;
`;

export const ContentLayout = styled.section`
  .listing-layout {
    display: flex;
    align-items: flex-start;
  }
  .content-body {
    width: 740px;
    padding: 0 20px;
    border-right: solid 1px ${p => p.theme.border};
    min-height: 82vh;
    margin: ${p => p.theme.space['20']} 0;
  }
  @media (max-width: ${p => p.theme.breakPoints.tablet}) {
    width: 100%;
    border: 0;
    .content-body {
      width: 100%;
      border: 0;
    }
  }
`;
export const MainContent = styled.main`
  height: auto;
  min-height: 88vh;
`;
export const HeaderLayout = styled.header`
  width: 100%;
  margin: 0 auto;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 1px 0px;
  background: ${p => p.theme.nav};
  margin-bottom: ${p => p.theme.space['16']};
  position: fixed;
  z-index: 999;
  .header-layout {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .header-menu {
      ul {
        margin: 0;
        padding: 0;
        li {
          display: inline-flex;
          padding: 0 1rem;
          height: 57px;
          align-items: center;
          cursor: pointer;
          a {
            float: left;
            color: ${p => p.theme.text_200};
            text-decoration: none;
            font-size: ${p => p.theme.fontSizes.normal};
            font-weight: ${p => p.theme.fontWeights.bold};
            cursor: pointer;
            &:hover {
              color: ${p => p.theme.text_600};
            }
          }
        }
      }
      .logo-layout {
        margin-right: 20px;
        padding: 6px 0;
      }
    }
    .search {
      input {
        height: 48px;
        background: transparent;
        color: #fff;
        border: 1px solid #ddd;
        line-height: 22px;
        padding: 0 20px;
        border-radius: 4px;
      }
      .search-btn {
        height: 58px;
        border: 0;
        background: ${p => p.theme.primary_500};
        color: #fff;
        cursor: pointer;
      }
      .theme-btn {
        height: 58px;
        margin-right: 10px;
        background: transparent;
        border: 0;
      }
    }
  }
  @media (max-width: ${p => p.theme.breakPoints.tablet}) {
    .header-layout {
      padding: 0 ${p => p.theme.space['20']};
      .mobile-menu {
        .mobile-menu-icon {
          display: flex;
          justify-content: center;
          border: 0;
          padding: 4px;
        }
        ul {
          position: absolute;
          z-index: 1;
          background: ${p => p.theme.background};
          width: 100%;
          left: 0;
          list-style: none;
          padding: 0;
          border-bottom: 1px solid ${p => p.theme.border};
          visibility: hidden;
          height: 0;
          &.show {
            transition: 1s;
            visibility: visible;
            height: auto;
          }
          li {
            cursor: pointer;
            margin: 5px 0;
            padding: 8px 20px;
            &:hover {
              background-color: ${p => p.theme.text_500};
            }
          }
        }
      }
      .header-menu {
        .logo-layout {
          margin: 0;
        }
      }
      .search {
        display: flex;
        column-gap: 4px;
        .search-btn {
          padding: 0 4px;
        }
        .theme-btn {
          padding: 0 4px;
          margin-right: 0;
        }
      }
    }
  }
`;
