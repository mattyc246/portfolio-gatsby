import React from 'react';
import styled from '@emotion/styled';

const StyledBox = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.md}px;

  a {
    color: ${({ theme }) => theme.colors.orange[5]};
    font-weight: 600;
    text-decoration: none;

    :hover {
      color: ${({ theme }) => theme.colors.orange[7]};
    }
  }
`;

const DangerousHtml = (props) => {
  return <StyledBox {...props} />;
};

export default DangerousHtml;
