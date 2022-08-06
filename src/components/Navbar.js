import React, { useState } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components/macro';

import IconButton from './ui/IconButton';

import { FaEllipsisH } from '@react-icons/all-files/fa/FaEllipsisH';
import { FaTimes } from '@react-icons/all-files/fa/FaTimes';

import { breakpoints, colors, fontSize, margin, padding } from '../styles';

const Container = styled.nav`
  width: 90%;
  margin: 0 auto;
  padding: ${padding.oneRem} 0;

  @media screen and (min-width: ${breakpoints.md}) {
    padding: ${padding.oneRem} ${padding.twoRem};
  }
`;
const BottomBorder = styled.hr`
  height: 4px;
  border: 0;
  background: ${colors.gradient};
  width: 90%;
  margin: 0 auto;
  border-radius: 2px;
`;
const MobileButtons = styled.div`
  display: flex;
  justify-content: flex-end;

  @media screen and (min-width: ${breakpoints.md}) {
    display: none;
  }
`;
const MobileNavigation = styled.div`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${colors.overlay};

  @media screen and (min-width: ${breakpoints.md}) {
    display: none;
  }
`;
const Menu = styled.div`
  width: 250px;
  height: 100vh;
  background-color: ${colors.white};
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  position: absolute;
  border-radius: 10px 0 0 10px;
  right: 0;
  top: 0;
`;
const MenuHeader = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;
`;
const DesktopMenu = styled.div`
  display: none;

  @media screen and (min-width: ${breakpoints.md}) {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
`;
const NavLink = styled.div`
  display: flex;
  flex-direction: column;
  margin: ${margin.halfRem} 0;
  margin-left: ${margin.oneRem};

  span {
    display: block;
    width: 0;
    height: 3px;
    border-radius: 1.5px;
    background: ${colors.gradient};
    margin-top: ${margin.quarterRem};
    transition: width 0.3s ease-in-out;
  }

  :hover {
    span {
      width: 100%;
    }
  }

  a {
    text-decoration: none;
    color: ${colors.black};
    font-size: ${fontSize.xLarge};
    font-weight: 400;

    &.active {
      font-weight: 700;
      background: ${colors.gradient};
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Container>
        <MobileButtons>
          <IconButton onClick={() => setIsOpen(true)} icon={<FaEllipsisH />} />
        </MobileButtons>
        <DesktopMenu>
          <NavLink>
            <Link activeClassName="active" to="/about">
              About
            </Link>
            <span />
          </NavLink>
          <NavLink>
            <Link activeClassName="active" to="/work">
              Work
            </Link>
            <span />
          </NavLink>
          <NavLink>
            <Link activeClassName="active" to="/blog">
              Blog
            </Link>
            <span />
          </NavLink>
          <NavLink>
            <Link activeClassName="active" to="/contact">
              Contact
            </Link>
            <span />
          </NavLink>
        </DesktopMenu>
      </Container>
      <BottomBorder />
      <MobileNavigation isOpen={isOpen}>
        <Menu>
          <MenuHeader>
            <IconButton onClick={() => setIsOpen(false)} icon={<FaTimes />} />
          </MenuHeader>
        </Menu>
      </MobileNavigation>
    </>
  );
};

export default Navbar;
