import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';

const StyledLink = styled(Link)`
  position: relative;
  z-index: 1;
  color: ${({ theme }) => theme.white};
  text-decoration: none;
  font-family: 'Roboto Mono', 'Monaco', monospace;
  font-size: ${({ theme }) => theme.fontSizes.sm}px;

  ::before {
    content: '';
    position: absolute;
    z-index: -1;
    top: 0;
    bottom: 0;
    left: -0.25em;
    right: -0.25em;
    background-color: ${({ theme }) => theme.colors.orange[7]};
    transform-origin: bottom center;
    transform: scaleY(0.1);
    transition: all 0.2s ease-in-out;
  }

  :hover::before {
    transform: scaleY(1);
    background-color: ${({ theme }) => theme.colors.orange[7]};
  }

  &.active {
    ::before {
      transform: scaleY(1);
      background-color: ${({ theme }) => theme.colors.orange[7]};
    }
  }
`;

const NavLink = (props) => {
  const { to, children, ...rest } = props;
  return (
    <StyledLink activeClassName="active" to={to} {...rest}>
      {children}
    </StyledLink>
  );
};

export default NavLink;
