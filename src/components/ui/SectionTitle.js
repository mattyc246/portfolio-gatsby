import React from 'react';
import styled from '@emotion/styled';

import { Title } from '@mantine/core';

const StyledTitle = styled(Title)`
  display: inline-block;
  position: relative;
  line-height: 1.1;
  text-align: left;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin: 0 0 0.75rem 1rem;

  ::before {
    border-color: ${({ gradient, theme }) =>
      theme.colors[gradient.from][theme.primaryShade[theme.colorScheme]]};
    top: -14px;
    left: -22px;
    border-left: 2px solid
      ${({ gradient, theme }) =>
        theme.colors[gradient.from][theme.primaryShade[theme.colorScheme]]};
    border-top: 2px solid
      ${({ gradient, theme }) =>
        theme.colors[gradient.from][theme.primaryShade[theme.colorScheme]]};
  }
  ::after {
    bottom: -14px;
    right: -22px;
    border-right: 2px solid
      ${({ gradient, theme }) =>
        theme.colors[gradient.to][theme.primaryShade[theme.colorScheme]]};
    border-bottom: 2px solid
      ${({ gradient, theme }) =>
        theme.colors[gradient.to][theme.primaryShade[theme.colorScheme]]};
  }
  ::before,
  ::after {
    content: '';
    position: absolute;
    width: 10px;
    height: 10px;
  }
`;

const SectionTitle = ({ children, ...props }) => {
  return <StyledTitle {...props}>{children}</StyledTitle>;
};

export default SectionTitle;
