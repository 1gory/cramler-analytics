import React from 'react';
import styled from 'styled-components';
import preloader from './preloader.svg';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 370px;
`;

export default () => (
  <Wrapper>
    <img src={preloader} alt="preloader" />
  </Wrapper>
);
