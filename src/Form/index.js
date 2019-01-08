import React, {Component} from 'react';
import styled from 'styled-components';
import H2 from '../Elements/H2';
import Br from '../Elements/Br';
import InputMask from 'react-input-mask';
import StyledButton from './../Elements/CtaButton';
import StyledInput from './../Elements/Input';
import bg from './bg.jpg';

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
  padding-bottom: 40px;
`;

const OfferText = styled.div``;

const Price = styled.div`
  font-weight: bold;
  font-size: 48px;
`;

const RubleSign = styled.span`
  font-weight: bold;
`;

const OfferWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding-top: 30px;
  
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
  constructor(props) {
    super(props);

    this.state = {
      formName: 'Lead',
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleClick(formData) {
    this.props.handlechangePopUp('order');
    ym(51779426, 'reachGoal', 'lead');
    fetch('/api/order', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify(formData),
    }).then(async (data) => {
      console.log('form sent');
      this.props.handleOpen();
      const response = await data.json();
      console.log(response);
    }).catch((error) => {
      console.log(error);
    });
  }

  handleChange(e) {
    const state = {};
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  render() {
    return <div>
      <Wrapper>
        <FormWrapper>
          <H2>
            В одном отчете мы соберем все проблемы вашего сайта, <Br />
            исправив которые, вы повысите конверсию
          </H2>
          <OfferWrapper>
            <Offer>
              <OfferText>Комплексный аудит сайта</OfferText>
              <Price>4900<RubleSign>₽</RubleSign></Price>
            </Offer>
            <Form>
              <Input
                as={InputMask}
                name="phone"
                placeholder="Ваш телефон"
                onChange={this.handleChange}
                mask="+7 (999) 999-99-99"
              />
              <Input name="comment" placeholder="Адрес вашего сайта" onChange={this.handleChange} />
              <Button onClick={(event)=>{event.preventDefault(); this.handleClick(this.state)}} >
                Оставить заявку
              </Button>
            </Form>
          </OfferWrapper>
        </FormWrapper>
      </Wrapper>;
    </div>
  }
}