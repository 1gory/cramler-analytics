import React, {Component} from 'react';
import styled from 'styled-components';
import H2 from './../Elements/H2';
import H1 from './../Elements/H1';
import Br from './../Elements/Br';
import bg from './bg.jpg';
import bgMin from './bg-min.jpg';
import Button from './../Elements/CtaButton';

const Wrapper = styled.div`
  background: #FFF;
  background-size: cover;
  background-image: url(${bgMin});
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
  font-size: 18px;
  
  @media (min-width: 768px) {
    font-size: 22px;  
  }
`;

const ButtonWrapper = styled.div`
  margin: 0 auto;
  text-align: center;
  padding-top: 30px;
  
  @media (min-width: 768px) {
    padding-top: 60px;
    font-size: 18px;
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

  handleClick(formData) {
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
    }).catch((/* error */) => {
      // this.setState({
      //   fileFormStatus: ERROR_FORM_STATUS,
      // });
    });
  }

  render() {
    return <div>
      <Wrapper>
        <OfferText as={H1}>
          Проведем аудит вашего сайта / лендинга <Br />более чем по 100 факторам за 4 дня
        </OfferText>
        <SubOfferText as={H2}>
          Найдем ошибки в навигации и интерфейсах, <Br />
          мешающие посетителям увеличивать вашу прибыль
        </SubOfferText>
        <ButtonWrapper>
          <Button onClick={this.handleClick}>Оставить заявку на аудит</Button>
        </ButtonWrapper>
      </Wrapper>
    </div>
  }
}
