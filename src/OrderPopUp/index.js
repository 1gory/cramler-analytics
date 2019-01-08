/* eslint no-param-reassign: 0 */

import React from 'react';
import styled from 'styled-components';
import modalClose from './modal-close.svg';
import CtaButton from '../Elements/CtaButton';

const WrapperH3 = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 20px;
`;

const H3 = styled.h3`
  margin: 0;
  font-size: 20px;
  font-weight: bold;
`;

const Popup = styled.div`
  padding: 30px;
  margin: 20px;
  font-family: 'Roboto', sans-serif;
  box-shadow: 0 7px 15px 0 rgba(1, 1, 1, 0.1);
  background-color: #ffffff;
  border-radius: 5px;
  width: 350px;
  box-shadow: 0 7px 15px 0 rgba(1, 1, 1, 0.1);
`;

const Wrapper = styled.div`
  display: ${props => (props.isOpened ? 'flex' : 'none')};
  justify-content: center;
  align-items: flex-start;
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 2;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
  overflow: scroll;
`;

const StyledImg = styled.img`
  width: 13px;
  height: 13px;
  padding-top: 5px;
  cursor: pointer;
`;

const Text = styled.p`
  
`;

const Button = styled(CtaButton)`
  display: block;
  margin: 0 auto;
  margin-top: 40px;
`;

export default props => (
  <Wrapper isOpened={props.isOpened}>
    <Popup>
      <WrapperH3>
        <H3>{props.type.header}</H3>
        <StyledImg src={modalClose} onClick={props.handleClose} />
      </WrapperH3>
      <Text>{props.type.text}</Text>
      <Button onClick={props.handleClose}>Ок</Button>
    </Popup>
  </Wrapper>
);
