import React from 'react';
import styled from 'styled-components';
import H2 from '../Elements/H2';
import Br from '../Elements/Br'

const Wrapper = styled.div`
  text-align: center;
  padding: 40px 0;
`;

const ReasonsWrapper = styled.div`
  display: flex;
  // align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 768px;
`;

const Reason = styled.div`
  width: 220px;
  text-align: center;
`;

const ReasonText = styled.span`
  padding: 10px 0;
  display: inline-block;
`;

const Img = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 100px;
  background-color: #fff9b0;
  margin: 0 auto;
`;

const SubHeader = styled.span`
  
`;

export default ({name, point1, point2, point3, subheader}) => (
  <Wrapper>
    <H2>{name}</H2>
    {subheader && <SubHeader>{subheader}</SubHeader>}
    <ReasonsWrapper>
      <Reason>
        <Img />
        <ReasonText>{point1}</ReasonText>
      </Reason>
      <Reason>
        <Img />
        <ReasonText>{point2}</ReasonText>
      </Reason>
      <Reason>
        <Img />
        <ReasonText>{point3}</ReasonText>
      </Reason>
    </ReasonsWrapper>
  </Wrapper>
);