import React, {Component} from 'react';
import styled from 'styled-components';
import Scroll from 'react-scroll';
import H2 from './../Elements/H2';
import H1 from './../Elements/H1';
import Br from './../Elements/Br';
import bg from './bg.jpg';
import bgMin from './bg-min.jpg';
import Button from './../Elements/CtaButton';
import telegramIcon from "../Footer/Social/contact-social-telegram.svg";

const scroller = Scroll.scroller;

const Wrapper = styled.div`
  background: #FFF;
  background-size: cover;
  background-image: url(${bgMin});
  
  height: 100%;
  
  padding: 60px 20px;
  
  @media (min-width: 768px) {
    padding: 120px 0;
    background-image: url(${bg});  
  }
`;

const Offer = styled.span`
  color: #fff;
  padding: 0;
  text-align: center;
  text-shadow: 1px 1px 2px black, 0 0 1em black;
  
  @media (min-width: 768px) {
    margin: 0;
  }
`;

const OfferText = styled(Offer)`
  padding-bottom: 40px;
`;

const SubOfferText = styled(Offer)`
  font-weight: lighter;
  font-size: 35px;
  
  @media (min-width: 768px) {
    font-size: 35px;  
  }
`;

const ButtonWrapper = styled.div`
  margin: 0 auto;
  text-align: center;
  padding-top: 30px;
  
  @media (min-width: 768px) {
    padding-top: 60px;
  }
`;

export default class extends Component {

  constructor() {
    super();

    this.state = {
      invalidNumber: false,
      fileUploaded: false,
      isFileFieldHided: true,
      fileLabelText: 'Прикрепите файл...',
      phone: '',
      filePath: ''
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    scroller.scrollTo('FormAnchor', {
      duration: 800,
      delay: 100,
      smooth: true,
    });
  }

  render() {
    return <div>
      <Wrapper>
        <OfferText as={H1}>
          Разработка telegram-ботов. <br />Серверные решения любой сложности
        </OfferText>
        <SubOfferText as={H2}>
          Реализация любых интеграций с ботом <br />
          (Google Sheets, Google Calendar, AmoСRM и прочеe)
        </SubOfferText>
        <ButtonWrapper>
          <a href="tg://resolve?domain=igoryp" onClick={() => (ym(51779426, 'reachGoal', 'telegram'))} target="_blank">
            <Button>Связаться</Button>
          </a>
        </ButtonWrapper>
      </Wrapper>
    </div>
  }
}
