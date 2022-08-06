import React from 'react';
import styled from 'styled-components/macro';

import { FaFacebook } from '@react-icons/all-files/fa/FaFacebook';
import { FaGithub } from '@react-icons/all-files/fa/FaGithub';
import { FaInstagram } from '@react-icons/all-files/fa/FaInstagram';

import { breakpoints, colors, fontSize, margin, padding } from '../styles';

const Wrapper = styled.div`
  width: 100%;
`;
const Container = styled.footer`
  width: 90%;
  margin: 0 auto;
  padding: ${padding.oneRem} ${padding.twoRem};
  display: flex;
  flex-direction: column-reverse;
  align-items: center;

  @media screen and (min-width: ${breakpoints.md}) {
    flex-direction: row;
    justify-content: space-between;
  }
`;
const SocialLinks = styled.div`
  display: flex;
  align-items: center;
`;
const SocialLink = styled.a`
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  background-color: ${colors.white};
  margin: ${margin.quarterRem};
  cursor: pointer;
  border-radius: 50%;
  transition: all 0.3s ease-in-out;

  :hover {
    background-color: ${colors.secondary};
    color: ${colors.white};
  }
`;
const TextContent = styled.div`
  display: flex;
  align-items: center;
  margin-top: ${margin.halfRem};

  @media screen and (min-width: ${breakpoints.md}) {
    margin-top: 0;
  }
`;
const Copyright = styled.p`
  font-size: ${fontSize.large};
  font-weight: 300;
`;
const TopBorder = styled.hr`
  height: 4px;
  border: 0;
  background: ${colors.gradient};
  width: 90%;
  margin: 0 auto;
  border-radius: 2px;
`;

const Footer = () => {
  return (
    <Wrapper>
      <TopBorder />
      <Container>
        <TextContent>
          <Copyright>
            &copy; {new Date().getUTCFullYear()} Matthew Cross
          </Copyright>
        </TextContent>
        <SocialLinks>
          <SocialLink>
            <FaFacebook />
          </SocialLink>
          <SocialLink>
            <FaGithub />
          </SocialLink>
          <SocialLink>
            <FaInstagram />
          </SocialLink>
        </SocialLinks>
      </Container>
    </Wrapper>
  );
};

export default Footer;
