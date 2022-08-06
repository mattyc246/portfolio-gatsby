import React from 'react';
import styled from 'styled-components/macro';

import { colors } from '../../styles';

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${colors.black};
  border-radius: 4px;
  height: 30px;
  width: 30px;
  background-color: ${colors.white};
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  :hover {
    background-color: ${colors.lightGrey};
  }
`;

const IconButton = ({ icon, ...rest }) => {
  return <Button {...rest}>{icon}</Button>;
};

export default IconButton;
