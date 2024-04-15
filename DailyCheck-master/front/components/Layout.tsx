import React, { useEffect } from 'react';
import Navbar from './Navbar';
import styled from 'styled-components';
import Footer from './Footer';

const StyledLayout = styled.div`
  width: 100%;
  height: 100vh;
`;

export default function Layout({ children }) {
  return (
    <StyledLayout id="Body">
      <Navbar />
      {children}
      <Footer />
    </StyledLayout>
  );
}
