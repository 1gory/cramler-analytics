import React from 'react';
import styled from 'styled-components';
import Scroll from 'react-scroll';
import diamond from './diamond.svg';
import usability from './usability.svg';
import analysis from './analysis.svg';
import Section from './Section';

const FormAnchor = Scroll.Element;

const Wrapper = styled.div`
  padding-bottom: 120px;
  background-color: #f9f9f9;
  
  @media(max-width: 768px) {
    padding-bottom: 60px;
  }
`;

export default () => (
  <Wrapper>
    <Section
      sectionHeader="1. Упаковка и смыслы"
      background="#f9f9f9"
      img={diamond}
      problems={[
        "Пользователи сомневаются в ваших компетенциях",
        "Вы не доносите до посетителей выгоды, которые они получат, если выберут именно вас",
        "Не закрываете возражения клиентов"
      ]}
      text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
      ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
      laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
      voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
      proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    />
    <Section
      sectionHeader="2. Юзабилити и конверсия"
      background="#f0f0f0"
      img={usability}
      problems={[
        "Сложно сделать первый шаг к покупке",
        "Неудобно расположены элементы интерфейса и CTA (call to action)",
        "Перегруженный интерфейс или отсутвие нужных элементов"
      ]}
      text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
      ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
      laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
      voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
      proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    />
    <Section
      sectionHeader="3. Технический анализ и seo-аудит"
      background="#f9f9f9"
      img={analysis}
      problems={[
        "Медленная загрузка, неоптимизированные изображения",
        "Неправильно настроены sitemap.xml, robots.txt, ssl-сертификаты и многое другое",
        "Неправильная структура сайта с точки зрения seo"
      ]}
      text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
      ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
      laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
      voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
      proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    />
    <FormAnchor name="FormAnchor"/>
  </Wrapper>
);