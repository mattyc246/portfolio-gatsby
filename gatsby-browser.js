import React from 'react';

import { MantineProvider } from '@mantine/core';
import { themeObject } from './src/styles/theme';

import Layout from './src/components/Layout';

export const wrapRootElement = ({ element }) => {
  return (
    <MantineProvider theme={themeObject} withNormalizeCSS withGlobalStyles>
      <Layout>{element}</Layout>
    </MantineProvider>
  );
};
