import React from 'react';
import styled from '@emotion/styled';

import TopNav from './TopNav';
import BottomFooter from './BottomFooter';

const Content = styled.main``;

const Layout = ({ children }) => {
  return (
    <>
      <TopNav />
      <Content>{children}</Content>
      <BottomFooter />
    </>
  );
};

export default Layout;
