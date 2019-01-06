import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../icons/cramler-logo-line.svg';
import phoneIcon from '../icons/phone.svg';
import mailIcon from '../icons/mail.svg';

const Wrapper = styled.div`
  background: #fff;
  background:rgba(255, 255, 255,0.9);
  width: 100%;
  position: fixed;
  z-index: 1;
`;

const HeaderWrapper = styled.div`
  width: 100%;
  
  @media(min-width: 768px) {
    padding-left: 20px;
    display: block;
  }
`;

const Descriptor = styled.span`
  text-align: left;
  font-size: 12px;
  white-space: nowrap;
  
  @media(min-width: 768px) {
    font-size: 18px;
  }
`;

const Menu = styled.div`
  padding: 0 20px;
  max-width: 1170px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LogoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: normal;
  padding: 3px 0;
  
  @media(min-width: 768px) {
    flex-direction: row;
    align-items: center;
    width: 135px;
  }
`;

const Logo = styled.img`
  width: 90px;  
  
  @media(min-width: 768px) {
    width: 135px;
  }
`;

const Contacts = styled.div`
  white-space: nowrap;
  padding: 0px;
  font-family: 'Roboto-Light', sans-serif;
  font-size: 12px;
  
  @media(min-width: 768px) {
    font-size: 18px;
    padding: 18px 0;
  }
`;

const Phone = styled.a`
  color: black;
  padding-right: 25px;
  display: none;
  
  @media(min-width: 768px) {
    display: inline-block;
  }
`;

const Mail = styled.a`
  color: black;
  display: none;
  
  @media(min-width: 768px) {
    display: inline-block;
  }
`;

const Substrate = styled.div`
  height: 60px;
`;

const Icon = styled.img`
  width: 28px;
  
  @media(min-width: 768px) {
    display: none;
  }
`;

const PhoneIcon = styled(Icon)`
  padding-right: 10px;
`;

const MailIcon = styled(Icon)``;

export default () => (
  <div>
    <Wrapper>
      <Menu>
        <LogoWrapper>
          <Link to="/"><Logo src={logo}/></Link>
          <HeaderWrapper>
            <Descriptor>
              Аналитика и аудит сайтов
            </Descriptor>
          </HeaderWrapper>
        </LogoWrapper>
        <Contacts>
          <Phone href="tel:+79162282456" onClick={() => (ym(51779426, 'reachGoal', 'phone'))}>
            +7(916)228-24-56
          </Phone>
          <Mail href="mailto:info@cramler.ru" onClick={() => (ym(51779426, 'reachGoal', 'email'))}>
            info@cramler.ru
          </Mail>
          <PhoneIcon src={phoneIcon} />
          <MailIcon src={mailIcon} />
        </Contacts>
      </Menu>
    </Wrapper>
    <Substrate />
  </div>
);