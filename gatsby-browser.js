import React from 'react';
import { MantineProvider } from '@mantine/core';
import { themeObject } from './src/styles/theme';

export const wrapRootElement = ({ element }) => {
  return (
    <MantineProvider theme={themeObject} withNormalizeCSS withGlobalStyles>
      {element}
    </MantineProvider>
  );
};
