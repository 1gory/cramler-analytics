import React from 'react';
import styled from 'styled-components';
import H2 from '../H2';
import './style.css';

const Wrapper = styled.div`
  text-align: center;
  padding: 120px 0;
  
  @media(max-width: 768px) {
    padding: 60px 0;
  }
`;

const ReasonsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 768px;
  
  @media(max-width: 768px) {
    flex-direction: column;
  }
`;

const Reason = styled.div`
  width: 230px;
  padding-top: 50px;
  text-align: center;
  
  @media(max-width: 768px) {
    padding: 20px 0;
  }

  &:hover img {
    // padding: 0;
    width: 50px;
    height: 50px;
  }
`;

const ReasonText = styled.span`
  padding: 20px 0;
  display: inline-block;
  font-size: 18px;
  
  @media(max-width: 768px) {
    padding: 10px 0 20px 0;
  }
`;

const Img = styled.img`
  width: 40px;
  height: 40px;
  margin: 0 auto;
  display: block;
  transition: all 0.1s ease-out 0s;
`;

const ImgWrapper = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
`;

const SubHeader = styled.span`
  display: inline-block;
  padding: 20px 0;
  font-size: 18px;
`;

const stroke = <svg width="202" height="2" xmlns="http://www.w3.org/2000/svg">
  <line x1="0" y1="0" x2="200" y2="0" className="stroke" stroke="#000000" />
</svg>;

export default ({name, subheader, point1, point2, point3, img1, img2, img3, smWidth}) => (
  <Wrapper>
    <H2>{name}</H2>
    {subheader && <SubHeader>{subheader}</SubHeader>}
    <ReasonsWrapper>
      <Reason className="stroke-container">
        <ImgWrapper>
          <Img src={img1} />
        </ImgWrapper>
        <ReasonText>{point1}</ReasonText>
        {stroke}
      </Reason>
      <Reason className="stroke-container">
        <ImgWrapper>
          <Img src={img2} />
        </ImgWrapper>
        <ReasonText>{point2}</ReasonText>
        {stroke}
      </Reason>
      <Reason className="stroke-container">
        <ImgWrapper>
          <Img src={img3} />
        </ImgWrapper>
        <ReasonText>{point3}</ReasonText>
        {stroke}
      </Reason>
    </ReasonsWrapper>
  </Wrapper>
);

