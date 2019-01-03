import React, {Component} from 'react';
import styled from 'styled-components';
import H2 from './../Elements/H2';
import H1 from './../Elements/H1';
import Br from './../Elements/Br';
import bg from './bg.jpg';
import Button from './../Elements/CtaButton';

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
  padding-top: 120px;
  padding-bottom: 40px;
  font-weight: lighter;
`;

const SubOfferText = styled(Offer)`
  font-weight: lighter;
`;

const Wrapper = styled.div`
  background: #FFF;
  background-size: cover;
  
  @media (min-width: 768px) {
    background-image: url(${bg});  
  }
`;

const Background = styled.div`
  padding: 30px 0;
  
  @media (min-width: 768px) {
    padding: 60px 0;
  }
`;

const ButtonWrapper = styled.div`
  margin: 0 auto;
  width: 320px;
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
          Выявим ошибки в интерфейсах, навигации и контенте, <Br />
          которые мешают посетителям увеличивать вашу прибыль
        </SubOfferText>
        <Background>
          <ButtonWrapper>
            <Button onClick={this.handleClick}>Оставить заявку на аудит</Button>
          </ButtonWrapper>
        </Background>
      </Wrapper>
    </div>
  }
}
