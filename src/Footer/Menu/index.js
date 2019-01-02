import React from 'react';
import styled from 'styled-components';
import Scroll from 'react-scroll';
import instagramIcon from '../Social/contact-social-insta.svg';
import vkIcon from '../Social/contact-social-vk.svg';
import telegramIcon from '../Social/contact-social-telegram.svg';
import youtubeIcon from '../Social/contact-social-youtube.svg';
import visa from '../Payments/visa.svg';
import maestro from '../Payments/maestro.svg';
import mastecard from '../Payments/mastercard.svg';
import sbOnline from '../Payments/sb_online.svg';
import mir from '../Payments/mir.svg';
import qiwi from '../Payments/qiwi.svg';

const Wrapper = styled.div`
  background-color: #272727;
  padding: 20px;
`;

const MenuWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  
  @media (min-width: 768px) {
    justify-content: space-between;
    max-width: 970px;
    flex-direction: row;
  }
`;

const MenuLink = styled.a`
  cursor: pointer;
  text-decoration: none;
  color: #fff;
  font-family: 'Roboto-Light', sans-serif;
  font-size: 14px;
  line-height: 1.88em;
  display: inline-block;

  @media (min-width: 768px) {
    font-size: 16px;
    padding-left: 25px;
  }
`;

const Icon = styled.img`
  width: 50px;
  margin: 10px;
`;

const SocialNetworksIcons = styled.div`
  margin: 0 auto;
  text-align: center;
`;

const FooterMenu = styled.div`
  padding: 10px;
  display: flex;
  justify-content: space-between;
  
  @media (min-width: 768px) {
    display: inline-block;
  }
`;

const PaymentIcons = styled.div`
  padding: 10px;
  text-align: center;
`;

const PaymentServiceLogo = styled.img`
  height: 25px;
  padding: 5px 0 5px 15px;
`;

const Requisites = styled.div`
  color: #fff;
  font-family: 'Roboto-Light', sans-serif;
  font-size: 12px;
  padding: 20px;
    
  @media (min-width: 768px) {
    text-align: center;
  }
`;

const scroller = Scroll.scroller;

const handleClick = (anchor) => {
  scroller.scrollTo(anchor, {
    duration: 800,
    delay: 100,
    smooth: true,
  });
};

export default () => (
  <Wrapper>
    <MenuWrapper>
      <FooterMenu>
        <MenuLink onClick={() => (handleClick('MaterialsAnchor'))}>Материалы</MenuLink>
        <MenuLink onClick={() => (handleClick('PriceAnchor'))}>Цены</MenuLink>
        <MenuLink onClick={() => (handleClick('GalleryAnchor'))}>Галерея</MenuLink>
        <MenuLink onClick={() => (handleClick('AboutAnchor'))}>О компании</MenuLink>
      </FooterMenu>
      <PaymentIcons>
        <PaymentServiceLogo src={visa} alt="Оплата картой visa" />
        <PaymentServiceLogo src={maestro} alt="Оплата картой maestro" />
        <PaymentServiceLogo src={mastecard} alt="Оплата картой mastercard" />
        <PaymentServiceLogo src={sbOnline} alt="Оплата через сбербанк онлайн" />
        <PaymentServiceLogo src={mir} alt="Оплата картой МИР" />
        <PaymentServiceLogo src={qiwi} alt="Оплата через Киви" />
      </PaymentIcons>
    </MenuWrapper>

    <Requisites>
      Индивидуальный предприниматель Першин Игорь Валерьевич<br />
      ОГРНИП 318774600098068<br />
      ИНН 771386120991<br />
      Банк МОСКОВСКИЙ ФИЛИАЛ АО КБ "МОДУЛЬБАНК"<br />
    </Requisites>

    <SocialNetworksIcons>
      <a href="https://vk.com/lazernaya__rezka" target="_blank">
        <Icon src={vkIcon} alt="nagravirovku vkontakte" onClick={() => (yaCounter48967208.reachGoal('vk'))} />
      </a>
      {/*<a href="https://instagram.com/casp_lase/" target="_blank">*/}
        {/*<Icon src={instagramIcon} alt="nagravirovku instagram" onClick={() => (yaCounter48967208.reachGoal('instagram'))} />*/}
      {/*</a>*/}
      {/*<a href="https://www.youtube.com/channel/UC2-rv4pDPmTUdjvl5GUBJsA" target="_blank">*/}
        {/*<Icon src={youtubeIcon} alt="Casp Lase YouTube" onClick={() => (yaCounter48967208.reachGoal('youtube'))} />*/}
      {/*</a>*/}
      <a href="tg://resolve?domain=andrew1322" target="_blank">
        <Icon src={telegramIcon} alt="nagravirovku telegram" />
      </a>
    </SocialNetworksIcons>
  </Wrapper>
);
