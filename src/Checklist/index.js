import React, {Component} from 'react';
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
  padding: 80px 0;
  
    
  @media(min-width: 768px) {
    padding: 100px 0;
  }
`;

const Form = styled.form`
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  padding: 20px 0;
  padding-top: 40px;
  max-width: 600px;
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
    flex-direction: row;
  }
`;

const Text = styled.div`
    font-size: 18px;  
    color: #fff;
`;

export default class extends Component {
  constructor(props) {
    super(props);

    this.state = {
      formName: 'Checklist',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSend = this.handleSend.bind(this);
  }

  handleChange(e) {
    const state = {};
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  handleSend(formData){
    this.props.handlechangePopUp('checklist');
    ym(51779426, 'reachGoal', 'checklist');
    fetch('/api/order', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify(formData),
    }).then(async (data) => {
      this.props.handleOpen();
      const response = await data.json();
      console.log(response);
    }).catch((error) => {
      console.log(error);
    });
  }

  render() {
    return <Wrapper>
      <CheckListFormWrapper>
        <H2>
          Оставьте свой Email
        </H2>
        <Text>
          Мы отправим бесплатный чек-лист по оптимизации вашего сайта
        </Text>
        <Form>
          <Input name="email" placeholder="Ваш email" onChange={this.handleChange} />
          <Button onClick={(event)=>{event.preventDefault(); this.handleSend(this.state)}} >Получить чек-лист</Button>
        </Form>
      </CheckListFormWrapper>
    </Wrapper>
  }
}