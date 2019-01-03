import React from 'react';
import styled from 'styled-components';
import H2 from '../Elements/H2';
import Br from '../Elements/Br';

const Wrapper = styled.div`
  text-align: center;
  padding-top: 20px;
  padding-bottom: 60px;
`;

export default () => (
  <Wrapper>
    <H2>
      Мы проанализируем ваш сайт,<Br />
      чтобы понять, где вы теряете клиентов<Br />
      по следующим направленям:
    </H2>
  </Wrapper>
);
