import React, { Component } from 'react';
import styled from 'styled-components';
import H2 from '../Elements/H2';
import Br from '../Elements/Br';

const Wrapper = styled.div`
  max-width: 768px;
  margin: 0 auto;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Offer = styled.div``;

const Price = styled.span``;

const FormWrapper = styled.div`
  display: flex;
  justify-content: space-around;
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
          Комплексный адуит сайта
          <Price>4900₽</Price>
        </Offer>
        <Form>
          <input/>
          <input/>
          <button>Оставить заявку</button>
        </Form>
      </FormWrapper>
    </Wrapper>;
  }
}