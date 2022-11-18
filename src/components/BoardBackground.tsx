import React from 'react';
import styled from 'styled-components';
import { colors } from '../styles';

const StyledBackground = styled.div`
  position: relative;
  display: flex;
  width: 90%;
  //   max-width: 1000px;
  height: 100vh;
  background-color: ${colors.white};
  padding: 20px;
  border-radius: 16px;
  margin: 30px 0;
`;

const BoardBackground = (props: any) => {
  return <StyledBackground>{props.children}</StyledBackground>;
};

export default BoardBackground;