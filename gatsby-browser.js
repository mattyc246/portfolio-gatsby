import React from 'react';
import './src/styles/global.css';
import 'prism-themes/themes/prism-one-dark.css';

import Layout from './src/components/Layout';

export const wrapRootElement = ({ element }) => {
  return <Layout>{element}</Layout>;
};
