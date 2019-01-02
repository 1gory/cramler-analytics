import React from 'react';
import styled from 'styled-components';
import H2 from '../Elements/H2';
import Br from '../Elements/Br';

const Wrapper = styled.div`
  text-align: center;
  max-width: 768px;
  margin: 0 auto;
`;

const SupportText = styled.div`
  text-align: left;
`;

export default () => (
  <Wrapper>
    <H2>
      Мы сделаем анализ вашего сайта,<Br />
      чтобы понять где вы теряете клиентов<Br />
      по следующим направленям:
    </H2>
    <SupportText>
      После того, как вы получите аудит, мы расскажем интересующие вас моменты,
      разъясним все непонятные моменты, дадим рекомендации по поводу дальнейших действий
    </SupportText>
  </Wrapper>
);
