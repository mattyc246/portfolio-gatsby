import React from 'react';
import styled from '@emotion/styled';

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
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        theme={{ colorScheme }}
        withGlobalStyles
        withNormalizeCSS
      >
        <MainWrap>
          <TopNav toggleColorScheme={toggleColorScheme} />
          <Content>{children}</Content>
          <BottomFooter />
        </MainWrap>
      </MantineProvider>
    </ColorSchemeProvider>
  );
};

export default Layout;
