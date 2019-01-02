import React from 'react';
import styled from 'styled-components';
import H3 from '../Elements/H3';

const Wrapper = styled.div`
`;

const SectionWrapper = styled.div`
  background-color: ${({background}) => (background ? background : 'gray')};
  padding: 20px 0;
  
`;

const SectionBlock = styled.div`
  max-width: 768px;
  margin: 0 auto;
`;

const SectionHeader = styled(H3)`
  text-align: center;
`;

const Section = ({problems, background, sectionHeader}) => (
  <SectionWrapper background={background}>
    <SectionBlock>
      <SectionHeader>
        {sectionHeader}
      </SectionHeader>
      <span>Проблемы:</span>
      <ul>
        {problems.map((problem, i) => (
          <li key={i}>
            {problem}
          </li>)
        )}
      </ul>
    </SectionBlock>
  </SectionWrapper>
);

export default () => (
  <Wrapper>
    <Section
      sectionHeader="Упаковка и смыслы"
      background="gray"
      problems={[
      "Пользователи сомневаются в ваших компетенциях",
      "Вы не доносите до пользователей выгоды, которые они получат, если выберут именно вас",
      "Не закрываете возражения клиентов"
    ]} />
    <Section
      sectionHeader="Конверсия и юзабилити"
      background="red"
      problems={[
        "Пользователи сомневаются в ваших компетенциях",
        "Вы не доносите до пользователей выгоды, которые они получат, если выберут именно вас",
        "Не закрываете возражения клиентов"
      ]} />
    <Section
      sectionHeader="Технический анализ и seo-аудит"
      background="gray"
      problems={[
      "Сложно сделать первый шаг к покупке",
      "Неудобно расположены элементы интерфейса и CTA (call to action)",
      "Перегруженный интерфейс или отсутвие нужных элементов"
    ]} />
  </Wrapper>
);