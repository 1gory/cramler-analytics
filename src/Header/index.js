import React from 'react';
import styled from 'styled-components';
import logo from '../icons/cramler-logo-line.svg';

const Wrapper = styled.div`
  background: #fff;
  opacity: 0.9;
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

const H1 = styled.h1`
  text-align: left;
  font-size: 12px;
  font-family: 'Roboto-Light', sans-serif;
  
  @media(min-width: 768px) {
    font-size: 18px;
  }
`;

const Menu = styled.div`
  max-width: 1170px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.img`
  width: 135px;
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
`;

const Mail = styled.a`
  color: black;
`;

const Substrate = styled.div`
  height: 60px;
`;

export default () => (
  <div>
    <Wrapper>
      <Menu>
        <Logo src={logo}/>
        <HeaderWrapper>
          <H1>
            Аналитика и аудит сайтов
          </H1>
        </HeaderWrapper>
        <Contacts>
          <Phone href="tel:+79162282456" onClick={() => (console.log())}>
            +7(916)228-24-56
          </Phone>
          <Mail href="mailto:info@cramler.ru" onClick={() => (console.log())}>
            info@cramler.ru
          </Mail>
        </Contacts>
      </Menu>
    </Wrapper>
    <Substrate />
  </div>
);