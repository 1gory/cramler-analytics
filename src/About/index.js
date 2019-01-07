import React from 'react';
import Waypoint from 'react-waypoint';
import styled from 'styled-components';
import Scroll from 'react-scroll';
import H2 from './../Elements/H2';
import Br from './../Elements/Br';

const AboutAnchor = Scroll.Element;

const Wrapper = styled.div`
  padding-top: 120px;
  padding-bottom: 30px;
`;

const Header = styled(H2)`
  text-align: center;
`;

const TextAbout = styled.p`
  max-width: 740px;
  margin: 0 auto;
  padding: 20px 40px;
  font-size: 16px;
`;

const Bold = styled.span`
  font-weight: bolder;
`;

export default ({handleScroll}) => (
  <Wrapper>
    <Waypoint onEnter={handleScroll}/>
    <AboutAnchor name="AboutAnchor"/>
    <Header>О компании</Header>
    <TextAbout>
      <Bold>Cramler</Bold> - аналитическое агенство. <Br />
      Мы занимаемся анализом сайтов для поиска проблемных мест, которые
      мешают посетителям совершать целевые действия, а владельцам получать прибыль.
    </TextAbout>
  </Wrapper>
);
