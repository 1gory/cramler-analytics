import React from 'react';
import styled from 'styled-components';
import H2 from '../Elements/H2';
import Br from '../Elements/Br';

const Wrapper = styled.div`
  text-align: center;
`;

export default () => (
  <Wrapper>
    <H2>
      Мы сделаем анализ вашего сайта,<Br />
      чтобы понять где вы теряете клиентов<Br />
      по следующим направленям:
    </H2>
  </Wrapper>
);
