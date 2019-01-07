import React from 'react';
import Scroll from 'react-scroll'
import styled from 'styled-components';
import H2 from '../Elements/H2';
import Br from '../Elements/Br';

const ProductAnchor = Scroll.Element;

const Wrapper = styled.div`
  text-align: center;
  padding: 120px;
  padding-bottom: 40px;
  background-color: #f9f9f9;
  
  @media(max-width: 768px){
    padding: 60px 20px 20px 20px;
  }
`;

export default () => (
<div>
  <ProductAnchor name="ProductAnchor" />
  <Wrapper>
    <H2>
      Мы проанализируем ваш сайт, <Br />
      чтобы понять, где вы теряете клиентов <Br />
      по следующим направленям:
    </H2>
  </Wrapper>
</div>
);
