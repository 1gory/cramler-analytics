import React from 'react';
import styled from 'styled-components';

export default styled.button`
  padding: 10px 30px;
  color:#ffffff;
  border: none;
  border-radius: 30px;
  font-size: 36px;
  font-family: 'Roboto-Light',sans-serif;
  cursor: pointer;
  background-color:#08b56d;
  
  &:hover {
    background-color: #1ba069;
  }
  
  @media (min-width: 768px) {
    padding: 15px 45px;
    font-size: 20px;
  }
`;
