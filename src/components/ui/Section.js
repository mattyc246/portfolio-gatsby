import React, { forwardRef } from 'react';

import styled from '@emotion/styled';

import { Box, Title } from '@mantine/core';

const StyledTitle = styled(Title)`
  display: inline-block;
  position: relative;
  line-height: 1.1;
  text-align: left;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin: 0 0 0.75rem 1rem;

  ::before {
    border-color: ${({ gradient }) => gradient.from};
    top: -14px;
    left: -22px;
    border-left: 5px solid ${({ gradient }) => gradient.from};
    border-top: 5px solid ${({ gradient }) => gradient.from};
  }
  ::after {
    bottom: -14px;
    right: -22px;
    border-right: 5px solid ${({ gradient }) => gradient.to};
    border-bottom: 5px solid ${({ gradient }) => gradient.to};
  }
  ::before,
  ::after {
    /* border-color: inherit; */
    content: '';
    position: absolute;
    width: 10px;
    height: 10px;
  }
`;

const Section = forwardRef((props, ref) => {
  const { content, title, minHeight, fullWidth, gradientFrom, gradientTo } =
    props;
  return (
    <Box
      ref={ref}
      component="section"
      sx={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        minHeight: minHeight || '100vh'
      }}
    >
      {title && (
        <Box
          sx={{
            width: fullWidth ? '100%' : '50%',
            display: 'flex',
            alignItems: 'center'
          }}
        >
          <StyledTitle
            order={3}
            variant="gradient"
            gradient={{ from: gradientFrom, to: gradientTo, deg: 90 }}
            sx={{ fontSize: '2rem' }}
          >
            {title}
          </StyledTitle>
        </Box>
      )}
      {content}
    </Box>
  );
});

export default Section;
