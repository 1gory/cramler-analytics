import React from 'react';
import styled from 'styled-components';
import H3 from '../Elements/H3';
import diamond from './diamond.svg';
import usability from './usability.svg';
import analysis from './analysis.svg';

const Wrapper = styled.div`
  padding-bottom: 120px;
  background-color: #f9f9f9;
  
  @media(max-width: 768px) {
    padding-bottom: 60px;
  }
`;

const SectionWrapper = styled.div`
  background-color: ${({background}) => (background ? background : 'gray')};
  padding: 50px 20px;
`;

const SectionBlock = styled.div`
  max-width: 768px;
  margin: 0 auto;
`;

const SectionHeader = styled(H3)`
  text-align: center;
  margin: 26px 0;
`;

const DetailsButton = styled.span`
  color: garkgray;
  text-decoration: underline;
  text-align: center;
  display: block;
  cursor: pointer;
`;

const Ul = styled.ul`
  max-width: 530px;
`;

const Li = styled.li`
  list-style-type: circle;
  padding-bottom: 10px;
`;

const ProblemsText = styled.span`
  font-size: 14px;
  margin-left: 20px;
`;

const Img = styled.img`
  width: 100px;
  display: block;
  
  @media(max-width: 768px) {
    display: none;
  }
`;

const MinImg = styled.img`
  width: 40px;
  display: none;
  
  @media(max-width: 768px) {
    display: block;
    margin: 0 auto;
  }
`;

const ImgWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

const Section = ({problems, background, sectionHeader, img}) => (
  <SectionWrapper background={background}>
    <SectionBlock>
      <MinImg src={img} />
      <SectionHeader>
        {sectionHeader}
      </SectionHeader>
      <ProblemsText>Проблемы:</ProblemsText>
      <ImgWrapper>
        <div>
          <Ul>
            {problems.map((problem, i) => (
              <Li key={i}>
                {problem}
              </Li>)
            )}
          </Ul>
          <DetailsButton>подробнее</DetailsButton>
        </div>
        <Img src={img} />
      </ImgWrapper>
    </SectionBlock>
  </SectionWrapper>
);

export default () => (
  <Wrapper>
    <Section
      sectionHeader="1. Упаковка и смыслы"
      background="#f9f9f9"
      img={diamond}
      problems={[
        "Пользователи сомневаются в ваших компетенциях",
        "Вы не доносите до пользователей выгоды, которые они получат, если выберут именно вас",
        "Не закрываете возражения клиентов"
      ]}/>
    <Section
      sectionHeader="2. Юзабилити и конверсия"
      background="#f0f0f0"
      img={usability}
      problems={[
        "Сложно сделать первый шаг к покупке",
        "Неудобно расположены элементы интерфейса и CTA (call to action)",
        "Перегруженный интерфейс или отсутвие нужных элементов"
      ]}/>
    <Section
      sectionHeader="3. Технический анализ и seo-аудит"
      background="#f9f9f9"
      img={analysis}
      problems={[
        "Медленная загрузка, неоптимизированные изображения",
        "Неправильно настроены sitemap.xml, robots.txt, ssl-сертификаты и многое другое",
        "Неправильная структура сайта с точки зрения seo"
      ]}/>
  </Wrapper>
);