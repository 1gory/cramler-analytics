import React from 'react';
import styled from 'styled-components';
import H3 from '../Elements/H3';

const Wrapper = styled.div`
`;

const SectionWrapper = styled.div`
  background-color: ${({background}) => (background ? background : 'gray')};
  padding: 50px 0;
`;

const SectionBlock = styled.div`
  max-width: 768px;
  margin: 0 auto;
`;

const SectionHeader = styled(H3)`
  text-align: center;
`;

const DetailsButton = styled.span`
  color: garkgray;
  text-decoration: underline;
  text-align: center;
  display: block;
  cursor: pointer;
`;

const Li = styled.li`
  list-style-type: circle;
  padding-bottom: 10px;
`;

const ProblemsText = styled.span`
  font-size: 14px;
`;

const Section = ({problems, background, sectionHeader}) => (
  <SectionWrapper background={background}>
    <SectionBlock>
      <SectionHeader>
        {sectionHeader}
      </SectionHeader>
      <ProblemsText>Проблемы:</ProblemsText>
      <ul>
        {problems.map((problem, i) => (
          <Li key={i}>
            {problem}
          </Li>)
        )}
      </ul>
      <DetailsButton>подробнее</DetailsButton>
    </SectionBlock>
  </SectionWrapper>
);

export default () => (
  <Wrapper>
    <Section
      sectionHeader="Упаковка и смыслы"
      background="#f9f9f9"
      problems={[
      "Пользователи сомневаются в ваших компетенциях",
      "Вы не доносите до пользователей выгоды, которые они получат, если выберут именно вас",
      "Не закрываете возражения клиентов"
    ]} />
    <Section
      sectionHeader="Юзабилити и конверсия"
      background="#f9f9f9"
      problems={[
        "Сложно сделать первый шаг к покупке",
        "Неудобно расположены элементы интерфейса и CTA (call to action)",
        "Перегруженный интерфейс или отсутвие нужных элементов"
      ]} />
    <Section
      sectionHeader="Технический анализ и seo-аудит"
      background="#f9f9f9"
      problems={[
      "Сложно сделать первый шаг к покупке",
      "Неудобно расположены элементы интерфейса и CTA (call to action)",
      "Перегруженный интерфейс или отсутвие нужных элементов"
    ]} />
  </Wrapper>
);