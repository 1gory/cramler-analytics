import React from 'react';
import styled from 'styled-components';

export default styled.button`
  width: 100%;
  padding: 10px 40px;
  color:#ffffff;
  border: none;
  border-radius: 24px;
  font-size: 20px;
  font-family: 'Roboto',sans-serif;
  cursor: pointer;
  
  // Change the color to separate the buttons
  background-color:#08b56d;
  
  &:hover {
    background-color: #1ba069;
  }
  
  @media (min-width: 768px) {
    background-color:#08b56d;
  }
`;