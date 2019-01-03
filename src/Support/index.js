import React from 'react';
import styled from 'styled-components';
import H2 from '../Elements/H2';

const Wrapper = styled.div`
  background-color: #f9f9f9;
  padding: 60px 0;
`;

const SupportText = styled.div`
  text-align: left;
  padding-top: 30px;
`;

const SupportSection = styled.div`
  text-align: center;
  max-width: 768px;
  margin: 0 auto;
`;

export default () => (
  <Wrapper>
    <SupportSection>
      <H2>
        Поддержка
      </H2>
      <SupportText>
        После того, как вы получите аудит, мы расскажем интересующие вас моменты,
        разъясним все непонятные моменты, дадим рекомендации по поводу дальнейших действий
      </SupportText>
    </SupportSection>
  </Wrapper>
);
