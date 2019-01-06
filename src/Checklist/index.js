import React, { Component } from 'react';
import styled from 'styled-components';
import StyledH2 from '../Elements/H2';
import StyledButton from '../Elements/CtaButton';
import StyledInput from '../Elements/Input';

const Wrapper = styled.div`
  background-color: #3b3b3b;
`;

const CheckListFormWrapper = styled.div`
  margin: 0 auto;
  max-width: 768px;
  text-align: center;
  padding: 40px 0;
`;

const Form = styled.form`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 0 auto;
  padding: 20px 0;
  max-width: 600px;
  
  @media(max-width: 768px) {
    flex-direction: column;
  }
`;

const Button = styled(StyledButton)`
  width: 260px;  
`;

const H2 = styled(StyledH2)`
  color: #fff;
  font-weight: lighter;
`;

const Input = styled(StyledInput)`
  width: 260px;
  flex-direction: column;
  margin-bottom: 15px;
  
  @media(min-width: 768px) {
    margin-bottom: 0;
    flex-direction: row;
  }
`;

export default class extends Component {
  render() {
    return <Wrapper>
      <CheckListFormWrapper>
        <H2>
          <b>Оставьте свой Email<br /></b>
          Мы отправим бесплатный чек-лист по оптимизации вашего сайта
        </H2>
        <Form>
          <Input placeholder="Ваш email" />
          <Button>Получить чек-лист</Button>
        </Form>
      </CheckListFormWrapper>
    </Wrapper>
  }
}