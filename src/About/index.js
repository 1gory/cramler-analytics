import React from 'react';
import styled from 'styled-components';
import Scroll from 'react-scroll';
// import { Row, Col } from 'react-flexbox-grid';
import H2 from './../Elements/H2';


const AboutAnchor = Scroll.Element;

const Wrapper = styled.div`
  background: #f3f3f3;
  padding: 30px 0;
`;

const Header = styled(H2)`
  text-align: center;
`;

const Img = styled.img`
  margin: 0 auto;
  display: block;
  border-radius: 50%;
  width: 100px;
  
  @media(min-width: 768px) {
    width: 150px;
  }
`;

const Name = styled.div`
  padding-top: 15px;
  padding-bottom: 10px;
  text-align: center;
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  
  @media(min-width: 768px) {
    padding-top: 30px;
    padding-bottom: 5px;
    margin: 0 auto;
    max-width: 1170px;
  }
`;

const Description = styled.p`
  width: 100px;
  font-size: 12px;
  margin: 0 auto;
  text-align: center;
  font-family: 'Roboto-Light', sans-serif;
  padding-bottom: 15px;
  
  @media(min-width: 768px) {
    font-size: 14px;
    width: 200px;
  }
`;

const RowWrapper = styled.div`
  padding: 30px;
  
  @media(min-width: 768px) {
    margin: 0 auto;
    max-width: 1170px;
  }
`;

const TextAbout = styled.p`
  font-family: 'Tahoma', sans-serif;
  max-width: 740px;
  margin: 0 auto;
  padding: 20px 40px;
  font-size: 15px;
`;

export default () => (
  <Wrapper>
    <AboutAnchor name="AboutAnchor" />
    <Header>О компании</Header>
    <TextAbout>
        <b>Cramler</b> - .
        Занимаемся изготовлением рекламной и сувенирной продукции.
        С нашей помощью вы сможете выделить свою продукцию и сделать ваш бренд запоминающимся!
        Для этого используем лазерную резку и гравировку, УФ-печать на различных материалах.
    </TextAbout>
    </Wrapper>
);
