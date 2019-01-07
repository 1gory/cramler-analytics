import React from 'react';
import styled from 'styled-components';
import H2 from '../Elements/H2';
import bg from './bg.jpg';
import bgMin from './bg-min.jpg';

const Wrapper = styled.div`
  background-color: #f9f9f9;
  padding: 180px 0;
  background-image: url(${bg});
  background-size: cover;
  position: relative;
  
  @media(max-width: 768px) {
    background-image: url(${bgMin});
  }
`;

const SupportText = styled.div`
  text-align: left;
  padding-top: 30px;
  font-size: 18px;
  
  @media(max-width: 768px) {
    padding: 0 20px;
  }
`;

const SupportSection = styled.div`
  text-align: center;
  max-width: 768px;
  color: #fff;
  position: absolute;
  left: 0;
  right: 0;    
  top: 90px;
  margin: 0 auto;
`;

const Shadow = styled.div`
  background: linear-gradient(to bottom, transparent, black) no-repeat bottom;
  background-size: 100% 130%;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0%;
`;

export default () => (
  <Wrapper>
    <Shadow />
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
