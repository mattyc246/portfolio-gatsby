import React from 'react';
import styled from '@emotion/styled';

import { StaticQuery, graphql } from 'gatsby';
import { HelmetDatoCms } from 'gatsby-source-datocms';
import { ColorSchemeProvider, MantineProvider } from '@mantine/core';
import { useLocalStorage } from '@mantine/hooks';

import TopNav from './TopNav';
import BottomFooter from './BottomFooter';

const MainWrap = styled.main`
  max-width: 800px;
  margin: 0 auto;
`;

const Content = styled.div``;

const Layout = ({ children }) => {
  const [colorScheme, setColorScheme] = useLocalStorage({
    key: 'portfolio-color-scheme',
    defaultValue: 'dark',
    getInitialValueInEffect: true
  });

  const toggleColorScheme = (value) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  return (
    <StaticQuery
      query={graphql`
        query LayoutQuery {
          datoCmsSite {
            globalSeo {
              siteName
            }
            faviconMetaTags {
              ...GatsbyDatoCmsFaviconMetaTags
            }
          }
        }
      `}
      render={(data) => {
        return (
          <ColorSchemeProvider
            colorScheme={colorScheme}
            toggleColorScheme={toggleColorScheme}
          >
            <MantineProvider
              theme={{
                colorScheme,
                fontFamily:
                  "'Source Sans Pro', system-ui, -apple-system, BlinkMacSystemFont,'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"
              }}
              withGlobalStyles
              withNormalizeCSS
            >
              <HelmetDatoCms favicon={data.datoCmsSite.faviconMetaTags} />
              <MainWrap>
                <TopNav toggleColorScheme={toggleColorScheme} />
                <Content>{children}</Content>
                <BottomFooter />
              </MainWrap>
            </MantineProvider>
          </ColorSchemeProvider>
        );
      }}
    />
  );
};

export default Layout;
