import React from 'react';
import styled from 'styled-components/macro';

import Footer from './Footer';
import Navbar from './Navbar';

import { padding } from '../styles';

const Body = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;
const Main = styled.main`
  flex: 1;
  width: 90%;
  max-width: 1000px;
  margin: 0 auto;
  padding: ${padding.oneRem};
`;

const Layout = ({ children }) => {
  return (
    <Body>
      <Navbar />
      <Main>{children}</Main>
      <Footer />
    </Body>
  );
};

export default Layout;
