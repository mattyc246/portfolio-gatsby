import React from 'react';
import styled from '@emotion/styled';

import { Button, keyframes } from '@mantine/core';

const backgroundAnimation = keyframes`
  0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
`;

const StyledButton = styled(Button)`
  background: linear-gradient(-45deg, #f76707, #d6336c, #7048e8, #0ca678);
  background-size: 400% 400%;
  animation: ${backgroundAnimation} 10s ease infinite;
`;

const MovingGradientButton = ({ children, ...props }) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};

export default MovingGradientButton;
