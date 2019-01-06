import React, { Component } from 'react';
import styled from 'styled-components';
import H2 from '../Elements/H2';
import Br from '../Elements/Br';
import StyledButton from './../Elements/CtaButton';
import StyledInput from './../Elements/Input';

const Wrapper = styled.div`
  background-color: lightyellow;
  max-width: 768px;
  margin: 0 auto;
  text-align: center;
  padding: 40px 0;
  
  @media(max-width: 768px) {
    padding: 0 20px;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding-top: 30px;
`;

const Offer = styled.div`
  font-size: 24px;
`;

const OfferText = styled.div``;

const Price = styled.div``;

const RubleSign = styled.span`
  font-weight: lighter;
`;

const FormWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

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
    return <Wrapper>
      <H2>
        В одном отчете мы соберем все проблемы вашего сайта, <Br />
        исправив которые, вы повысите конверсию
      </H2>
      <FormWrapper>
        <Offer>
          <OfferText>Комплексный адуит сайта</OfferText>
          <Price>4900<RubleSign>₽</RubleSign></Price>
        </Offer>
        <Form>
          <Input placeholder="Ваш телефон"/>
          <Input placeholder="Адрес вашего сайта"/>
          <Button>Оставить заявку</Button>
        </Form>
      </FormWrapper>
    </Wrapper>;
  }
}