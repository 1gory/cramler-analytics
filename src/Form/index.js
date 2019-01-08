import React, { Component } from 'react';
import styled from 'styled-components';
import Scroll from 'react-scroll';
import H2 from '../Elements/H2';
import Br from '../Elements/Br';
import StyledButton from './../Elements/CtaButton';
import StyledInput from './../Elements/Input';
import bg from './bg.jpg';

// const FormAnchor = Scroll.Element;

const Wrapper = styled.div`
  background-color: #4a4a4a;
  padding: 120px 0;
  background-image: url(${bg});
  background-size: cover;
  // background-position: 0 -170px;
  
  @media(max-width: 768px) {
    padding: 60px 20px;
  }
`;

const FormWrapper = styled.div`
  color: #fff;
  max-width: 768px;
  margin: 0 auto;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Offer = styled.div`
  font-size: 24px;
  padding-bottom: 30px;
`;

const OfferText = styled.div``;

const Price = styled.div``;

const RubleSign = styled.span`
  font-weight: lighter;
`;

const OfferWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding-top: 40px;
  
  @media(max-width: 768px) {
    flex-direction: column;
  }
`;

const Input = styled(StyledInput)`
  margin-bottom: 15px;
`;

const Button = styled(StyledButton)`
  
`;

export default class extends Component {
  render(){
    return <div>
      <Wrapper>
        <FormWrapper>
          <H2>
            В одном отчете мы соберем все проблемы вашего сайта, <Br />
            исправив которые, вы повысите конверсию
          </H2>
          <OfferWrapper>
            <Offer>
              <OfferText>Комплексный адуит сайта</OfferText>
              <Price>4900<RubleSign>₽</RubleSign></Price>
            </Offer>
            <Form>
              <Input placeholder="Ваш телефон"/>
              <Input placeholder="Адрес вашего сайта"/>
              <Button>Оставить заявку</Button>
            </Form>
          </OfferWrapper>
        </FormWrapper>
      </Wrapper>;
    </div>
  }
}