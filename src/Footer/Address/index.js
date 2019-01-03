import React from 'react';
import styled from 'styled-components';
import H2 from '../../Elements/H2';

const Wrapper = styled.div`
  text-align: center;
  padding: 20px 40px;
`;

const Description = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  color: #3b3b3b;
  
  @media (min-width: 768px) {
    width: 650px;
    margin: 0 auto;
  }
`;

export default () => (
  <Wrapper>
    <H2>Наш адрес</H2>
    <Description>
        г.Москва, Алтуфьевское шоссе д.5. <br/> 5 минут от м.«Владыкино» или 7 минут от МЦК «Окружная».
    </Description>
  </Wrapper>
);
