import React, { Component } from 'react';
import styled from 'styled-components';
import { Model, Material, Messenger, PhoneNumber, CustomerName } from '../../generic/ProductDetails/index';
import validatePhone from '../../../functions/validatePhone';

const H4 = styled.h4`
  font-size: 16px;
  color: #4a4a4a;
  padding: 0 0 0 15px;
  margin-bottom: 10px;
`;

const SendButton = styled.button`
  border: none;
  border-radius: 20px;
  background-color: #3b3b3b;
  color: #ffffff;
  font-family: 'Roboto', sans-serif;
  padding: 10px 50px;
  margin: 20px;
  background-color: ${({ disabled }) => (disabled ? '#797979' : '#3b3b3b')}
`;

export default class extends Component {
  constructor() {
    super();

    this.state = {
      messenger: 'whatsapp',
      model: 'iPhone 5/5S/SE',
      material: 'light',
    };

    this.handleChangeForm = this.handleChangeForm.bind(this);
  }

  handleChangeForm(e) {
    const state = {};
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  disableForm() {
    this.setState({
      disabled: true,
    });
  }

  checkPhone(formData) {
    if (!formData.phone || !(validatePhone(formData.phone))) {
      this.setState({
        invalidNumber: true,
      });
      return false;
    }
    return true;
  }

  render() {
    return (
      (
        <form>
          <Messenger handleChangeForm={this.handleChangeForm} />
          <PhoneNumber
            handleChangeForm={this.handleChangeForm}
            invalidNumber={this.state.invalidNumber}
          />

          <H4>Детали товара</H4>
          <Model handleChangeForm={this.handleChangeForm} />
          <Material handleChangeForm={this.handleChangeForm} />
          <CustomerName handleChangeForm={this.handleChangeForm} />
          <SendButton
            onClick={(event) => {
              event.preventDefault();
              if (this.checkPhone(this.state)) {
                this.disableForm();
                this.props.handleSendForm(this.state);
              }
            }}
            disabled={this.state.disabled}
          >
            Заказать
          </SendButton>
        </form>
      )
    );
  }
}
