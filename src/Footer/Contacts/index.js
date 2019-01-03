/* eslint react/prop-types: 0 */

import React, { Component } from 'react';
import styled from 'styled-components';
import Scroll from 'react-scroll';
import contactsEmail from './contact-email.svg';
import contactsPhone from './contact-phone.svg';
import contactsMessenger from './contact-messengers.svg';
import logowhite from '../../icons/cramler-logo-inline-gray.svg';

const Wrapper = styled.div`
  background-color: #3b3b3b;
  position: relative;
`;

const ContactsWrapper = styled.div`
  padding: 15px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  @media (min-width: 768px) {
    max-width: 970px;
    flex-direction: row;
    justify-content: space-around;
  }
`;

const Contacts = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const ContactWrapper = styled.div`
  // width: 175px;
  display: flex;
  align-items: center;
  padding: 10px;
`;

const ContactIcon = styled.img`
  width: 20px;
  margin-right: 10px;
`;

const Label = styled.div`
  font-family: 'Roboto-Light', sans-serif;
  font-weight: bold;
  color: #9d9d9d;
  font-size: 12px;
  padding-bottom: 5px;
`;

const Info = styled.a`
  font-family: 'Roboto-Light', sans-serif;
  font-size: 16px;
  color: #ffffff;
`;

const LeaveMessageButton = styled.button`
  background-color: #d92518;
  cursor: pointer;
  border: solid 1px #272727;
  border-radius: 20px;
  font-family: 'Roboto-Light', sans-serif;
  font-size: 16px;
  padding: 10px 25px;
  color: #fff
  
  margin: 15px;
  
`;

const Logo = styled.img`
  display: none; 
 
  @media (min-width: 768px) {
    display: block;
    height: 25px;
    padding: 15px;
    opacity: 0.5;
  }
`;

const scroller = Scroll.scroller;

const handleClick = () => {
  scroller.scrollTo('FormAnchor', {
    duration: 800,
    delay: 100,
    smooth: true,
  });
};

const Contact = props => (
  <ContactWrapper>
    <ContactIcon src={props.icon} />
    <div>
      <Label>{props.label}</Label>
      <Info href={props.href}>{props.info}</Info>
    </div>
  </ContactWrapper>
);

export default () => (
  <Wrapper>
    <ContactsWrapper>
      <Contacts>
        <a href="/"><Logo src={ logowhite} /></a>
        <Contact
          icon={contactsEmail}
          label="Email"
          info="info@cramler.ru"
          href="mailto:info@cramler.ru"
          onClick={() => (ym(51779426, 'reachGoal', 'email'))}
        />
        <Contact
          icon={contactsPhone}
          label="Телефон для связи"
          info="+7 (916) 228-24-56"
          href="tel:+79162282456"
          onClick={() => (ym(51779426, 'reachGoal', 'phone'))}
        />
        <Contact
          icon={contactsMessenger}
          label="WhatsApp, Telegram"
          info="+7 (916) 228-24-56"
          href="whatsapp://send?text=Здравствуйте!&phone=+79162282456"
          onClick={() => (ym(51779426, 'reachGoal', 'whatsapp'))}
        />
      </Contacts>
      <LeaveMessageButton onClick={handleClick}>Оставьте заявку</LeaveMessageButton>
    </ContactsWrapper>
  </Wrapper>
);
