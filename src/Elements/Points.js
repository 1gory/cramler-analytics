import React from 'react';
import styled from 'styled-components';
import H2 from '../Elements/H2';

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
  padding: 25px 0;
  text-align: center;
`;

const ReasonText = styled.span`
  padding: 20px 0;
  display: inline-block;
  font-size: 18px;
`;

const Img = styled.img`
  width: 100px;
  margin: 0 auto;
  display: block;
`;

const SubHeader = styled.span`
  display: inline-block;
  padding: 20px 0
`;

export default ({name, subheader, point1, point2, point3, img1, img2, img3, smWidth}) => (
  <Wrapper>
    <H2>{name}</H2>
    {subheader && <SubHeader>{subheader}</SubHeader>}
    <ReasonsWrapper>
      <Reason>
        <Img src={img1} smWidth={smWidth} />
        <ReasonText>{point1}</ReasonText>
      </Reason>
      <Reason>
        <Img src={img2} smWidth={smWidth} />
        <ReasonText>{point2}</ReasonText>
      </Reason>
      <Reason>
        <Img src={img3} smWidth={smWidth} />
        <ReasonText>{point3}</ReasonText>
      </Reason>
    </ReasonsWrapper>
  </Wrapper>
);