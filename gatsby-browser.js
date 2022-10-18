import React from 'react';
import './src/styles/global.css';
import 'prism-themes/themes/prism-one-dark.css';

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
