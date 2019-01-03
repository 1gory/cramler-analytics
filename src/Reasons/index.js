import React from 'react';
import styled from 'styled-components';
import Br from '../Elements/Br';
import H2 from '../Elements/H2';
import img1 from '../icons/emoji/rock.png';
import img2 from '../icons/emoji/disappointed.png';
import img3 from '../icons/emoji/monocle.png';

const Wrapper = styled.div`
  text-align: center;
  padding: 60px 0;
`;

const ReasonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 768px;
`;

const Reason = styled.div`
  width: 230px;
  padding: 50px 0;
  text-align: center;
`;

const ReasonText = styled.span`
  padding: 20px 0;
  display: inline-block;
  font-size: 18px;
`;

const Img = styled.img`
  width: 50px;
  margin: 0 auto;
  display: block;
`;

const SubHeader = styled.span`
  display: inline-block;
  padding: 20px 0
`;

const Point1 = <span>Вам не доверяют и<Br /> отказываются от покупки</span>;
const Point2 = <span>На сайте <Br />сложно купить</span>;
const Point3 = <span>Ваш сайт не находят <Br />в google и yandex</span>;

export default () => (
  <Wrapper>
    <H2>Зачем</H2>
    <SubHeader>Каждый день вы теряете клиентов, если:</SubHeader>
    <ReasonsWrapper>
      <Reason>
        <Img src={img1} />
        <ReasonText>{Point1}</ReasonText>
      </Reason>
      <Reason>
        <Img src={img2} />
        <ReasonText>{Point2}</ReasonText>
      </Reason>
      <Reason>
        <Img src={img3} />
        <ReasonText>{Point3}</ReasonText>
      </Reason>
    </ReasonsWrapper>
  </Wrapper>
);
