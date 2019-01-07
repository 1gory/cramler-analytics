import React from 'react';
import styled from 'styled-components';

export default styled.button`
  padding: 10px 30px;
  color:#ffffff;
  border: none;
  border-radius: 24px;
  font-size: 20px;
  font-family: 'Roboto',sans-serif;
  cursor: pointer;
  background-color:#08b56d;
  
  &:hover {
    background-color: #1ba069;
  }
  
  @media (min-width: 768px) {
    background-color:#08b56d;
    padding: 10px 40px;
  }
`;