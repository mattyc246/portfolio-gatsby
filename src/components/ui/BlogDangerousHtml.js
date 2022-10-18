import React from 'react';
import styled from '@emotion/styled';

const StyledBox = styled.div`
  p {
    padding: ${({ theme }) => `0 ${theme.spacing.sm}px`};
    font-size: ${({ theme }) => theme.fontSizes.lg}px;
    margin: 2rem 0;
    line-height: 26px;
  }

  hr {
    border: 0;
    border-top-width: 1px;
    border-top-color: #4d4f66;
    border-top-style: solid;
    margin: 0;
  }

  img {
    display: block;
    max-width: 600px;
    margin: 0 auto;
  }

  figcaption {
    font-size: ${({ theme }) => theme.fontSizes.sm}px;
    text-align: center;
  }

  a {
    color: ${({ theme }) => theme.colors.orange[5]};
    font-weight: 600;
    text-decoration: none;

    :hover {
      color: ${({ theme }) => theme.colors.orange[7]};
    }
  }
`;

const BlogDangerousHtml = (props) => {
  return <StyledBox {...props} />;
};

export default BlogDangerousHtml;
